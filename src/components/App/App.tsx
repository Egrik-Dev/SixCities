import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main } from "../Main/Main";

interface AppProps {
  quantityOffers: number;
}

export const App = (props: AppProps): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main quantityOffers={props.quantityOffers} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
