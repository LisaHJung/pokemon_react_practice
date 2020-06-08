import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.name}</h3>
      <a href={props.url}> Click here for more info </a>
    </div>
  );
}
export default Card;
