import React, { useState, useEffect } from "react";
import Form from "./Component/Form";
import Home from "./Component/Home";
import OrderSummary from "./Component/OrderSummary";

import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

const initialForm = {
  name: "",
  size: "",
  pepperoni: false,
  cheese: false,
  pineapple: false,
  mushroom: false,
  special: "",
};

const intialError = {
  name: "",
  size: "",
};

const initalPizzas = [];
const initialDisabled = true;

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 Characters"),
  size: yup.string().oneOf(["small", "medium", "large"], "Please pick a size"),
  special: yup.string().max(500, "Max 500 Characters"),
  pepperoni: yup.boolean(),
  cheese: yup.boolean(),
  mushroom: yup.boolean(),
  pineapple: yup.boolean(),
});

const App = () => {
  const [pizzas, setPizzas] = useState(initalPizzas);
  const [formValues, setFormValues] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(intialError);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const postNewPizzas = (newPizza) => {
  //   axios
  //     .post("http://reqres.in/api/users", newPizza)
  //     .then((res) => {
  //       setPizzas([res.data, ...pizzas]);
  //       setFormValues(initialForm);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const updateTopping = (inputName, inputValue) => {
    yup
      .reach(schema, inputName)
      .validate(inputValue)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [inputName]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [inputName]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitTopping = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      toppings: ["pepperoni", "cheese", "mushroom", "pineapple"].filter(
        (topping) => formValues[topping]
      ),
    };
    setPizzas(newPizza);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <div>
        <nav>
          <h1>Lambda Eats</h1>
          <p>Come one come all BEST PIZZA IN TOWN</p>
          <Link to="/">Home</Link>
          <Link to="/pizza">Place your Order</Link>
          <Link to="/summary">Review your Order</Link>
        </nav>
      </div>
      {
        <Switch>
          <Route path="/pizza">
            <Form
              values={formValues}
              change={updateTopping}
              submit={submitTopping}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>
          <Route path="/summary">
            <OrderSummary key={pizzas.id} details={formValues} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      }
    </>
  );
};
export default App;
