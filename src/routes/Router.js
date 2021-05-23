import React, { lazy, Suspense } from "react";

import { Redirect, Switch, withRouter } from "react-router-dom";

import Login from "../views/Login";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Spinner from "../components/Spinner";

const Home = lazy(() => import("../views/Users"));
const MainRouter = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/users" component={Home} />
        <Redirect from="/*" to="/login" />
      </Switch>
    </Suspense>
  );
};

export default withRouter(MainRouter);
