import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const StyledError = styled.span`
  display: block;
  color: red;
  margin-top: 15px;
  font-size: 14px;
`;

const ErrorMessage = ({ errorMessage }) => {
  return <StyledError>{errorMessage && errorMessage}</StyledError>;
};
ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

export default React.memo(ErrorMessage);
