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
import { AppRoute } from "../../const";

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
        <Route exact path={AppRoute.ROOT}>
          <Main hotels={hotels} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites hotels={hotels} />
        </Route>
        <Route
          exact
          path={`${AppRoute.OFFER}/:id`}
          render={(offerProps: any) => (
            <Room hotels={hotels} id={offerProps.match.params.id} />
          )}
        />
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
