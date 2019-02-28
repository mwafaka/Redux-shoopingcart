import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { appReducer } from "./modules/appReducer";
import products from "./products.json";

/* ↑
 * ↑ you should delete this line
 * and create a proper reducer and import it.
 * like this ↓
 * import { appReducer } from "./modules/reducers"
 */

const store = createStore(
  appReducer,
  {
    products,
    cart: []
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
