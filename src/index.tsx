import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createApi } from "./api";
import App from "./components/App/App";
import rootReducer from "./reducers/root-reducer";

const root = document.querySelector(`#root`);

export const api = createApi(() => console.log(`No Unauthorized`));

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api))
);

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
