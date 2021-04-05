import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/home";

const appRoutes = [
  {
    path: "/",
    page: Home,
  },
];

export const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        {appRoutes.map(({ path, page }, i) => (
          <Route path={path} component={page} exact key={`${path}=${i}`} />
        ))}
      </Switch>
    </HashRouter>
  );
};
