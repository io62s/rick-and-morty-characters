import React from "react";
import "./CharacterStyles.css";

function Character({ char }) {
  const {
    name,
    image,
    gender,
    status,
    species,
    location: { name: location }
  } = char;
  return (
    <div className="parent">
      <div className="card card-front">
        <img src={image} alt={name} />
        <h3>{name}</h3>
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
        <h5>Location: {location}</h5>
        <h5>Status: {status}</h5>
      </div>
    </div>
  );
}

export default Character;
