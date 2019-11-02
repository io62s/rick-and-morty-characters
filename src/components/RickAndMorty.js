import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import axios from "axios";

function RickAndMorty() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = res.data.results;
    setData(data);
    console.log(data);
  };

  const pageUp = () => {
    if (page === 25) {
      return;
    }
    setPage(page + 1);
  };

  const pageDown = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <CharacterList
        characters={data}
        pgUp={pageUp}
        pgDwn={pageDown}
        page={page}
      />
    </div>
  );
}

export default RickAndMorty;