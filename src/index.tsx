import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createApi } from "./api";
import { App } from "./components/App/App";
import rootReducer from "./state/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { actionCreators } from "./state";

const root = document.querySelector(`#root`);

export const api = createApi(() =>
  store.dispatch(actionCreators.changeAuthStatus(`NO_AUTH`))
);

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
