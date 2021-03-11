import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main } from "../Main/Main";
import { Login } from "../Login/Login";
import { Favorites } from "../Favorites/Favorites";
import { Room } from "../Room/Room";
import { connect } from "react-redux";
import { fetchHotels } from "../../actions/action-api";
import { StoreState } from "../../reducers/root-reducer";
import { Hotel } from "../../actions/action";

interface AppProps {
  hotels: Hotel[];
  fetchHotels: Function;
}

const App = ({ hotels, fetchHotels }: AppProps): JSX.Element => {
  const [loadingFlag, setLoadingFlag] = React.useState(true);

  React.useEffect((): void => {
    fetchHotels().then(() => setLoadingFlag(false));
  }, []);

  if (loadingFlag) {
    return <div>LOADING...</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main hotels={hotels} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Room />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({ hotels }: StoreState): { hotels: Hotel[] } => {
  return { hotels };
};

export { App };
export default connect(mapStateToProps, { fetchHotels })(App);
