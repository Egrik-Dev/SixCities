import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Main } from "../Main/Main";
import { Login } from "../Login/Login";
import { Favorites } from "../Favorites/Favorites";
import { Room } from "../Room/Room";
import { AppRoute } from "../../const";
import { useActions } from "../../hooks/useActions";

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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
    </BrowserRouter>
  );
};

export { App };
