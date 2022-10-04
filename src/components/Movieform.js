import React, { useContext, useState } from "react";

import { MovieContext } from "../store";

function Movieform() {
  const { state, dispatch } = useContext(MovieContext);
  const [msg, setMsg] = useState("");
  const [data, setData] = useState({
    name: "",
    ratings: "",
    duration: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.duration.includes("h") || data.duration.includes("m")) {
      setMsg("");
      if (data.duration.includes("m")) {
        let body = data.duration.split("m");
        data.duration = parseInt(body[0]) / 60 + "h";
        dispatch({ type: "CREATE", payload: data });
      } else {
        dispatch({ type: "CREATE", payload: data });
      }
      setData({
        name: "",
        ratings: "",
        duration: "",
      });
    } else {
      setMsg("Please Specify the time in hours or minutes(e.g. 2.5h or 150m)");
    }
  };
  const handleDuration = (e) => {};
  return (
    <section>
      <div className="card pa-30">
        <form onSubmit={handleSubmit}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Movie Name"
              data-testid="nameInput"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              type="number"
              id="ratings"
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
              value={data.ratings}
              onChange={(e) => setData({ ...data, ratings: e.target.value })}
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
              value={data.duration}
              onChange={(e) => setData({ ...data, duration: e.target.value })}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {msg && (
            <div className="alert error mb-30" data-testid="alert">
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}
          <div className="layout-row justify-content-end">
            <button type="submit" className="mx-0" data-testid="addButton">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
