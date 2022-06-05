import React from "react";

import { suspensify, getStarWarsCharacters } from "../Helpers/suspensify";
let initialData = suspensify(getStarWarsCharacters(2));

function Fetch() {
  const [people, setPeople] = React.useState(initialData);
  const [id, setId] = React.useState();

  return (
    <>
      <div>{people.read().name}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPeople(suspensify(getStarWarsCharacters(id)));
        }}
      >
        <label htmlFor="id">character id</label>
        <input
          id="id"
          type="number"
          onChange={(e) => {
            e.preventDefault();
            setId(e.target.value);
          }}
        />
        <button type="submit">get other people</button>
      </form>
    </>
  );
}

export default Fetch;
