import { PostAdd } from "@material-ui/icons";
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Post } from "./pages/post/post";

const appRoutes = [
  {
    path: "/",
    page: Home,
  },
  {
    path: "/post/:reddit/comments/:subredditId",
    page: Post,
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
