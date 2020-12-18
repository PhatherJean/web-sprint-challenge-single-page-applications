import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueUsed = type === "checkbox" ? checked : value;
    change(name, valueUsed);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="pizza-container">
        <h2>Here is your Order</h2>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>
        <div className="order-input">
          <h3>Your Information</h3>
          <br></br>
          <label>
            Name:
            <input
              name="name"
              type="text"
              onChange={onChange}
              value={values.name}
            />
          </label>
          <br></br>
          <label>
            Size:
            <select onChange={onChange} value={values.size} name="size">
              <option value="">---Size---</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
          <br></br>
          <label>
            Perpperoni:
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>
          <br></br>
          <label>
            Cheese:
            <input
              type="checkbox"
              name="cheese"
              checked={values.cheese}
              onChange={onChange}
            />
          </label>
          <br></br>
          <label>
            Mushroom:
            <input
              type="checkbox"
              name="mushroom"
              checked={values.mushroom}
              onChange={onChange}
            />
          </label>
          <br></br>
          <label>
            Pineapple:
            <input
              type="checkbox"
              name="pineapple"
              checked={values.pineapple}
              onChange={onChange}
            />
          </label>
          <br></br>
          <label>
            Special Instructions:
            <input
              name="special"
              type="text"
              value={values.special}
              onChange={onChange}
              placeholder="500 characters Max"
              maxLength="500 characters"
            />
          </label>
        </div>
        <button disabled={disabled}>Order Now</button>
      </div>
    </form>
  );
}
