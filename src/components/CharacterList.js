import React from "react";
import Character from "./Character";
import "./CharacterListStyles.css";

function CharacterList({ characters, pgUp, pgDwn, goBack, page }) {
  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>
      <div className="btns-container">
        {page > 2 && (
          <button className="btn go-back" onClick={goBack}>
            Back to Page 1
          </button>
        )}
        <div className="btns">
          <button className="btn" onClick={pgDwn}>
            Prev Page
          </button>{" "}
          <span>
            Page: <strong>{page}</strong> / 25
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
