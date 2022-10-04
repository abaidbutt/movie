import React, { useContext } from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";
import Provider, { MovieContext } from "./store";
import { use } from "chai";
const title = "Favorite Movie Directory";

function App() {
  const { state, dispatch } = useContext(MovieContext);

  return (
    <>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform />
        </div>
        <div className="layout-column w-30">
          <Search />
          <Movieslist />

          <div data-testid="noResult">
            {state?.result && (
              <h3 className="text-center" data-testid="noResult">
                No Results Found
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
