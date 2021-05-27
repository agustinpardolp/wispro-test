import React from "react";
import { Modal } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { StyledModalTitle, StyledModalContainer } from "../styled-components";

function WrappedModal({ title, children, message }) {
  return (
    <>
      <StyledModalTitle>
        <FormattedMessage id={title} />
      </StyledModalTitle>
      <StyledModalContainer>
        <p>
          <FormattedMessage id={message} />
        </p>
      </StyledModalContainer>
      <Modal.Body>{children}</Modal.Body>
    </>
  );
}

export default WrappedModal;
