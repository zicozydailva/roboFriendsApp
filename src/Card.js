import React from 'react';
// import robots from "./robots";

function Card(props) {
  return(
    <div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5" >
      <img alt="Robots Images" src={`http://robohash.org/${props.id}`} />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  )
};

export default Card;
