import React from "react";
import "./CharacterStyles.css";

function Character({ char }) {
  const { name, image, gender, status, species } = char;
  return (
    <div className="parent">
      <div className="card card-front">
        <img src={image} alt={name} />
        <div className="about">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="card card-back">
        <h4>Gender: {gender} </h4>
        <h4>Species: {species}</h4>
        <p>Status: {status}</p>
      </div>
    </div>
  );
}

export default Character;
