import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledInputContainer = styled.div`
  @media ${DEVICES_MAX_WIDTH.tablet} {
    display: block;
    display: grid;
    justify-content: center;
    text-align: center;
  }
  .label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: var(--primaryInputBorder);
  }

  input {
    ${(props) =>
      props.error ? "border: var(--primaryCancel) solid 1px" : null}
    width: 18rem;
    height: 2.2rem;
    border-radius: 5px;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--primaryInputBorder);
  }
`;

export { StyledInputContainer };
