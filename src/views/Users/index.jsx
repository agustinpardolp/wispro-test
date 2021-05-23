/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";

import {
  StyledUsers,

} from "./styled-components";

export const Users = () => {

  return (
    <>
      <StyledUsers>
      <div>Users</div>
      </StyledUsers>
    </>
  );
};
Users.propTypes = {
  history: PropTypes.object,
};

export default Users;
