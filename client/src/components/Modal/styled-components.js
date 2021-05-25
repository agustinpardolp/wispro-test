import styled from "styled-components";
import { ButtonGroup, Modal, Container } from "react-bootstrap";

const StyledButtonContainer = styled(ButtonGroup)`
  align-self: flex-end;
  height: 50%;
`;

const StyledModalTitle = styled(Modal.Header)`
  font-size: 24px;
`;
const StyledModalContainer = styled(Container)`
  margin-top: 25px;
`;
const StyledButtonGroup = styled.div`
  display: flex;
  margin-top: 5%;
  justify-content: space-around;
  height: 5vh;
  width: 100%;
`;
export { StyledButtonContainer, StyledModalTitle, StyledModalContainer, StyledButtonGroup };
