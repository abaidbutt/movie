import React, { useContext } from "react";
import { MovieContext } from "../store";

function Movieslist() {
  const { state, dispatch } = useContext(MovieContext);
  console.log(state);
  return (
    <section>
      {!state?.result && (
        <ul className="styled w-100 pl-0" data-testid="moviesList">
          {state?.filterdData?.length
            ? state?.filterdData
                ?.map((item, index) => (
                  <li
                    className="flex slide-up-fade-in justify-content-between"
                    style={{ borderBottom: "2px solid var(--primary-color)" }}
                    key={index}
                  >
                    <div className="layout-column w-40">
                      {/* use this header for movie name */}
                      <h3 className="my-3">{item.name}</h3>
                      {/* use this paragraph for movie ratings, for example: 'Ratings:
              88/100' */}
                      <p className="my-0">{item.ratings / 100}</p>
                    </div>
                    <div className="layout-row my-auto mr-20">
                      {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                      <p className="justify-content-end">{item.duration}</p>
                    </div>
                  </li>
                ))
                .sort((a, b) => a.duration - b.duration)
            : state?.movieData
                ?.map((item, index) => (
                  <li
                    className="flex slide-up-fade-in justify-content-between"
                    style={{ borderBottom: "2px solid var(--primary-color)" }}
                    key={index}
                  >
                    <div className="layout-column w-40">
                      {/* use this header for movie name */}
                      <h3 className="my-3">{item.name}</h3>
                      {/* use this paragraph for movie ratings, for example: 'Ratings:
              88/100' */}
                      <p className="my-0">{item.ratings / 100}</p>
                    </div>
                    <div className="layout-row my-auto mr-20">
                      {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                      <p className="justify-content-end">{item.duration}</p>
                    </div>
                  </li>
                ))
                .sort((a, b) => a.duration - b.duration)}
        </ul>
      )}
    </section>
  );
}

export default Movieslist;
