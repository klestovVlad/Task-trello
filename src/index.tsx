import "./index.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./store/root-reducer";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
ReactDOM.render(
  <Provider store={state.store}>
    <PersistGate loading={null} persistor={state.persistor}>
      <StrictMode>
        <App />
      </StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root"),
);

reportWebVitals();
