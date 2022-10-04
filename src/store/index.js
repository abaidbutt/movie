// import { useEffect, useState, useReducer, createContext } from "react";
import * as React from "react";

export const MovieContext = React.createContext();
const initState = {
  movieData: [],
  filterdData: [],
  result: false,
};
const reducer = (prevState, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        ...prevState,
        result: false,
        movieData: [...prevState.movieData, action.payload],
      };
    case "SEARCH":
      let payload = action.payload.toLowerCase();
      let body = prevState?.movieData?.filter((item) =>
        item.name.toLowerCase().includes(payload)
      );
      if (!body.length) {
        return {
          ...prevState,
          filterdData: body,
          result: true,
        };
      } else {
        return {
          ...prevState,
          filterdData: body,
          result: false,
        };
      }
  }
};
export default function Provider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}
