import React, { useContext, useState } from "react";
import { MovieContext } from "../store";

function Search() {
  const { state, dispatch } = useContext(MovieContext);
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
    if (query.length >= 2) {
      dispatch({ type: "SEARCH", payload: e.target.value });
    }
  };
  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
        value={query}
        onChange={handleChange}
      />
    </section>
  );
}

export default Search;
