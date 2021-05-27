import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { StyledWrapper, StyledTitle } from "./styled-components";

const ViewWrapper = ({ title = "", children }) => {
  return (
    <StyledWrapper>
      <StyledTitle>
        <FormattedMessage id={title} />
      </StyledTitle>
      <>{children}</>
    </StyledWrapper>
  );
};

ViewWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
export default ViewWrapper;
