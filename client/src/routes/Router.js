import React, { lazy, Suspense } from "react";

import { Redirect, Switch, withRouter, Route } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";
import Login from "../views/Login";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Spinner from "../components/Spinner";
import { route_tabs, routes } from "./constants";

const System = lazy(() => import("../views/System"));
const Users = lazy(() => import("../views/Users"));

const MainRouter = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <PublicRoute exact path={routes.login} component={Login} />
        <ContentWrapper tabs={route_tabs}>
          <Switch> 
            <PrivateRoute exact path={routes.users} component={Users} />
            <PrivateRoute exact path={routes.system} component={System} />
            <Redirect from={routes.any} to={routes.login} />
          </Switch>
        </ContentWrapper>
      </Switch>
    </Suspense>
  );
};

export default withRouter(MainRouter);
