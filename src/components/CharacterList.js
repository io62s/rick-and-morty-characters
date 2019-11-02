import React from "react";
import Character from "./Character";
import "./CharacterListStyles.css";

function CharacterList({ characters, pgUp, pgDwn, page }) {
  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>
      <div className="btns-container">
        <div className="btns">
          <button className="btn" onClick={pgDwn}>
            Prev Page
          </button>{" "}
          <span>
            Page: <strong>{page}</strong> of 25
          </span>{" "}
          <button className="btn" onClick={pgUp}>
            Next Page
          </button>
        </div>
      </div>
      <div className="grid-list">
        {characters.map(character => (
          <Character key={character.id} char={character} />
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
