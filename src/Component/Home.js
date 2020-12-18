import React from "react";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const history = useHistory();
  const routeToHome = () => {
    history.push("/");
  };
  return <div></div>;
}
