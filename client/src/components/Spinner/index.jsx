import React from "react";
import { Spinner as SpinnerComponent } from "react-bootstrap";

import { StyledSpinnerContainer } from "./styled-components";

const Spinner = () => {
  return (
    <StyledSpinnerContainer>
      <SpinnerComponent animation="border" />
    </StyledSpinnerContainer>
  );
};

export default Spinner;
