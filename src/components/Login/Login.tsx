import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AppRoute } from "../../const";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypesSelector";

export const Login = (): JSX.Element => {
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { authAction } = useActions();
  const { status } = useTypedSelector((state) => state.user);

  const sendUserData = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (user && password) authAction(user, password);
  };

  if (status === `AUTH`) {
    return <Redirect to={AppRoute.ROOT} />;
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.ROOT}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={sendUserData}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  onChange={(e) => setUser(e.currentTarget.value)}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={true}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.ROOT}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
