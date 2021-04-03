import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main } from "../Main/Main";
import { Login } from "../Login/Login";
import { Favorites } from "../Favorites/Favorites";
import { Room } from "../Room/Room";
import { AppRoute } from "../../const";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypesSelector";

type AppDispatchProps = {
  fetchHotels: Function;
};

const App = (): JSX.Element => {
  const [loadingFlag, setLoadingFlag] = React.useState(true);
  const { fetchHotels }: AppDispatchProps = useActions();
  const { hotels } = useTypedSelector((state) => state.hotels);

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
          <Main />
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

export { App };
