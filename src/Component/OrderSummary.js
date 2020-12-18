import React from "react";

export default function OrderSummary(props) {
  const { details } = props;

  if (!details) {
    return <h2>Awaiting your awesome pizza details...</h2>;
  }

  return (
    <div className="order_summary">
      <h2>{details.name}</h2>
      <p>{details.size}</p>
      <p>{details.special}</p>

      {!!details.toppings && !!details.toppings.length && (
        <div>
          Toppings:
          <ul>
            {details.toppings.map((top, index) => (
              <li key={index}>{top}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
