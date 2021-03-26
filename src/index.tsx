import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createApi } from "./api";
import App from "./components/App/App";
import rootReducer from "./state/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const root = document.querySelector(`#root`);

export const api = createApi(() => console.log(`No Unauthorized`));

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
