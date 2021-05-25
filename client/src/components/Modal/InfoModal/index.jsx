import React from "react";
import { Modal } from "react-bootstrap";
import Button from "../../Button";
import {
  StyledModalTitle,
  StyledModalContainer,
  StyledButtonGroup,
} from "../styled-components";
import { FormattedMessage } from "react-intl";
function GenericModal({
  title,
  message,
  handleAsyncConfirm,
  posResponse,
  data,
  dispatch,
}) {

  const onAsyncConfirm = async (data) => {
    let response = await handleAsyncConfirm(data);
    response && posResponse();
    dispatch({ type: "hide" });
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
              onAsyncConfirm
                ? () => onAsyncConfirm(data)
                : () => onHandleClose()
            }
          />
        </StyledButtonGroup>
      </Modal.Footer>
    </>
  );
}

export default GenericModal;
