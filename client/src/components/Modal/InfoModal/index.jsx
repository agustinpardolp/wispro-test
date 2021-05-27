import React from "react";
import { Modal } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import Button from "../../Button";
import {
  StyledModalTitle,
  StyledModalContainer,
  StyledButtonGroup,
} from "../styled-components";

function GenericModal({
  title,
  message,
  handleAsyncConfirm,
  handleConfirm,
  posResponse,
  data,
  dispatch,
}) {
  const onAsyncConfirm = async (data) => {
    let response = await handleAsyncConfirm(data);
    response && posResponse();
    onHandleClose()
  };

  const onConfirm = () => {
    if (handleConfirm) {
      handleConfirm();
      onHandleClose();
    } else {
      onHandleClose();
    }
  };

  const onHandleClose = () => {
    dispatch({ type: "hide" });
  };

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
      <Modal.Footer>
        <StyledButtonGroup>
          <Button
            onClick={onHandleClose}
            type="text"
            label="button.cancel"
            variant="cancel"
          />
          <Button
            type="text"
            label="button.confirm"
            variant="confirm"
            onClick={
              handleAsyncConfirm
                ? () => onAsyncConfirm(data)
                : () => onConfirm()
            }
          />
        </StyledButtonGroup>
      </Modal.Footer>
    </>
  );
}

GenericModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  handleAsyncConfirm: PropTypes.func,
  handleConfirm: PropTypes.func,
  posResponse: PropTypes.func,
  data: PropTypes.object,
  dispatch: PropTypes.func,
};

export default GenericModal;
