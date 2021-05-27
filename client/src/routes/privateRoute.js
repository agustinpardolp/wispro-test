import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ token, component: Component, ...rest }) => {
  const checkAuth = () => {
    let tokenData = JSON.parse(localStorage.getItem("token_data"));
    if (tokenData || token) {
      return true;
    } else return false;
  };

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          checkAuth(props) ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    </>
  );
};
export const mapStateToProps = (state) => {
  const {
    login: {
      user: { token },
    },
  } = state;
  console.log(state);

  return {
    token: token,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
