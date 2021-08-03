import "./index.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import rootReducer from "./context/board/reducer";
import reportWebVitals from "./reportWebVitals";

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
