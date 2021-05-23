import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { FormattedMessage } from "react-intl";
import { StyledModal, StyledModalWrapper } from "./styled-components";

const Modal = ({ onConfirm, onHide, show, label }) => {
  return (
    <>
      {show ? (
        <StyledModalWrapper>
          <StyledModal>
            <div className="modal_label-container">
              <p>
                {" "}
                <FormattedMessage id={label} />
              </p>
            </div>
            <div className="modal_button-group">
              <Button
                variant="confirm"
                label="button.confirm"
                onClick={onConfirm}
              ></Button>
              <Button
                variant="cancel"
                label="button.cancel"
                onClick={onHide}
              ></Button>
            </div>
          </StyledModal>
        </StyledModalWrapper>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  onConfirm: PropTypes.func,
  onHide: PropTypes.func,
  show: PropTypes.bool,
  label: PropTypes.string,
};

export default React.memo(Modal);
