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

type AppStateProps = {
  hotels: Hotel[];
};

type AppDispatchProps = {
  fetchHotels: Function;
};

type AppProps = AppStateProps & AppDispatchProps;

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
          <Favorites hotels={hotels} />
        </Route>
        <Route exact path="/offer/:id">
          <Room hotel={hotels[2]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({ hotels }: StoreState): { hotels: Hotel[] } => {
  return { hotels };
};

export { App };
export default connect<AppStateProps, AppDispatchProps, {}, StoreState>(
  mapStateToProps,
  { fetchHotels }
)(App);
