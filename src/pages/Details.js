import React from "react";
import { useLocation } from "react-router";

const Details = () => {
  const { state } = useLocation();
  console.log(state);
  return <div>hello</div>;
};

export default Details;
