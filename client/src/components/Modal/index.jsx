import React, { useContext } from "react";
import { Modal } from "react-bootstrap";

import { ModalContext } from "../../context/ModalContext";

import { MODALS } from "./constants";

function BasicModal() {
  let { modalType, modalProps, dispatch } = useContext(ModalContext);

  const ModularModal = MODALS[modalType];

  if (modalType) {
    return (
      <Modal
        size={modalProps.size}
        show={modalProps.open}
        onHide={() => dispatch({ type: "hide" })}
      >
        <ModularModal dispatch={dispatch} {...modalProps} />
      </Modal>
    );
  } else return null;
}

export default BasicModal;
