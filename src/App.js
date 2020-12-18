import React, { useState, useEffect } from "react";
import Form from "./Component/Form";
import Home from "./Component/Home";

import { Route, Link, Switch, Router } from "react-router-dom";
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

const App = () => {
  const [pizza, setPizza] = useState(initalPizzas);
  const [formValues, setFormValues] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(intialError);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postPizza = (newPizza) => {
    axios
      .post("fakeapi.com", newPizza)
      .then((res) => {
        setPizza([newPizza, ...pizza]);
        setFormValues(initalPizzas);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setPizza(res.data));
  }, []);

  return (
    <>
      <div>
        <nav>
          <h1>Lambda Eats</h1>
          <p>You can remove this code and create your own header</p>
        </nav>
      </div>

      {
        <Switch>
          <Route path="/pizza">
            <Form />
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
