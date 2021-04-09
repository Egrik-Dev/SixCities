import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Main } from "../Main/Main";
import { Login } from "../Login/Login";
import { Favorites } from "../Favorites/Favorites";
import { Room } from "../Room/Room";
import { AppRoute } from "../../const";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import browserHistory from "../../browser-history";

type AppDispatchProps = {
  fetchHotels: Function;
  checkAuthAction: Function;
};

const App = (): JSX.Element => {
  const [loadingFlag, setLoadingFlag] = React.useState(true);
  const { fetchHotels }: AppDispatchProps = useActions();
  const { checkAuthAction }: AppDispatchProps = useActions();

  React.useEffect((): void => {
    Promise.all([fetchHotels(), checkAuthAction()]).then(() =>
      setLoadingFlag(false)
    );
  }, []);

  if (loadingFlag) {
    return <div>LOADING...</div>;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route
          exact
          path={`${AppRoute.OFFER}/:id`}
          render={(offerProps: any) => <Room id={offerProps.match.params.id} />}
        />
      </Switch>
    </Router>
  );
};

export { App };
