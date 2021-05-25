import React from "react";
import { StyledDivider } from "./styled-components";
import PropTypes from "prop-types";
const Divider = ({ disableShadow }) => {
  return <StyledDivider disableShadow={disableShadow}></StyledDivider>;
};
Divider.propTypes = {
  disableShadow: PropTypes.bool,
};

export default Divider;
