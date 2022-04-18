import React from "react";

function Card({ children, reverse }) {
  console.log(reverse);
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

export default Card;
