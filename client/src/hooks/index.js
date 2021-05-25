import { useState, useEffect } from "react";
// custom hook to handler modals behiaviour
export const useModal = (state, trigger, path, history) => {
  let [showModal, setShowModal] = useState(state);

  useEffect(() => {
    trigger && setShowModal(true);
  }, [trigger]);

  const hideModal = () => {
    setShowModal(false);
  };
  const onConfirmRedirect = () => {
    history.push(path);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return {
    showModal,
    setShowModal,
    hideModal,
    onConfirmRedirect,
    openModal,
    toggleModal,
  };
};
