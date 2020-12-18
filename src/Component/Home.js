import React from "react";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const history = useHistory();
  const routeToOrder = () => {
    history.push("/pizza");
  };
  return (
    <div className="home-wrap">
      <img
        className="home-pizza"
        src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        alt="slice of pizza"
      />
      <button onClick={routeToOrder} className="orderBtn homePageBtn">
        Place your Order
      </button>
    </div>
  );
}
