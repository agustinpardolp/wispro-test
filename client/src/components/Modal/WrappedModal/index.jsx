import React from "react";
import { Modal } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import { StyledModalTitle, StyledModalContainer } from "../styled-components";

function WrappedModal({ title="default", children, message }) {
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
WrappedModal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  message: PropTypes.string,
};

export default WrappedModal;
