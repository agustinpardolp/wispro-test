import React, { createContext, useReducer } from "react";
import Modal from "../../components/Modal";
import { modalReducer, initialState } from "./reducer";
let ModalContext;
const { Provider } = (ModalContext = createContext());

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const { modalType, modalProps } = state;
  return (
    <Provider value={{ modalType, modalProps, dispatch }}>
      <Modal /> 
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
