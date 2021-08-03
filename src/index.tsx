import "./index.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./state/root-reducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById("root"),
);

reportWebVitals();
