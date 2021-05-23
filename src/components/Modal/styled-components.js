import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";
const StyledModalWrapper = styled.div`
  position: absolute;
  background: #ffffffe0;
  width: 100%;
  height: 100%;
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const StyledModal = styled.div`
  position: absolute;
  background: #ffffff;
  border: 1px solid lightgray;
  /* left: 35%;
  top: 200px; */
  height: 14rem;
  width: 25rem;
  display: grid;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1%;
  border-radius: 8px;
  z-index: 200000000;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  .modal_label-container {
    p {
      text-align: center;
    }
  }
  .modal_button-group {
    display: flex;
    justify-content: center;
    button {
      margin: 1%;
    }
  }
  @media ${DEVICES_MAX_WIDTH.mobileM} {
    width: 20rem;
    .modal_button-group {
      display: contents;
      justify-content: center;
      button {
        margin: 1%;
      }
    }
  }
`;

export { StyledModal, StyledModalWrapper };
