import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const routeToHome = () => {
    history.push("/");
  };
  return <div></div>;
}
