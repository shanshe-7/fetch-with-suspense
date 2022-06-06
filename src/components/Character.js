import React from "react";

import { suspensify, getStarWarsCharacters } from "../Helpers/suspensify";
let initialData = suspensify(getStarWarsCharacters(2));

function Character() {
  const [people, setPeople] = React.useState(initialData);
  const [id, setId] = React.useState();

  return (
    <>
      <div>{people.read().name}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (id > 0) setPeople(suspensify(getStarWarsCharacters(id)));
        }}
      >
        <label htmlFor="id">character id</label>
        <input
          id="id"
          type="number"
          min="1"
          onChange={(e) => {
            e.preventDefault();
            setId(e.target.value);
          }}
        />
        <button type="submit">Get other character</button>
      </form>
    </>
  );
}

export default Character;
