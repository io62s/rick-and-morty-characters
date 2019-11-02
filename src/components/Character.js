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
      <div
        className="card card-back"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center center"
        }}
      >
        <h3>Gender: {gender} </h3>
        <h3>Species: {species}</h3>
        <p>Status: {status}</p>
      </div>
    </div>
  );
}

export default Character;
