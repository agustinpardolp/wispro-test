import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({ user, component: Component, ...rest }) => {
  const checkAuth = () => {
    let tokenData = JSON.parse(localStorage.getItem("token_data"));
    if (tokenData || user.uid) return true;
    else return false;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth(props) ? (
          <Redirect from="/*" to="/users" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export const mapStateToProps = (state) => {
  const {
    login: { user },
  } = state;

  return {
    user,
  };
};

export default connect(mapStateToProps, null)(PublicRoute);
