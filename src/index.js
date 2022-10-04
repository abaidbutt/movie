import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";
import Provider from "./store";
function Main() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}
ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
applyPolyfills().then(() => {
  defineCustomElements(window);
});
