import React from "react";
// import { robots } from "./robots";

const Card = ({ email, name, id }) => {
  return (
    <div className="tc bg-light-green dib bt3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2> {name} </h2>
        <p> {email}</p>
      </div>
    </div>
  );
};

export default Card;
