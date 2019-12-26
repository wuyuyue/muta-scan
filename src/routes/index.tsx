import React from "react";
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
  RouteComponentProps
} from "react-router-dom";

import Home from "../pages/Home";
import NotFoundPage from "../pages/404";

export const pages: any[] = [
  {
    name: "Home",
    path: "/",
    exact: true,
    comp: Home
  },
  {
    name: "NotFound",
    path: "/404",
    exact: true,
    comp: NotFoundPage
  }
];

export default () => {
  const basename: string = process.env.PUBLIC_URL || "/";
  return (
    <HashRouter basename={basename}>
      <Switch>
        {pages.map(page => {
          return (
            <Route
              {...page}
              key={page.name}
              render={(routeProps: RouteComponentProps) => (
                <page.comp routeProps={routeProps} />
              )}
            />
          );
        })}
        <Redirect from="*" to="/404" />
      </Switch>
    </HashRouter>
  );
};
