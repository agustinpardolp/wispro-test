import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledInputContainer = styled.div`
  display: grid;
  .input-label {
    align-items: center;
    display: flex;
    justify-content: start;
    padding: 0;
    span {
      margin-left: 10px;
    }
  }

  input {
    border: none;
    border-bottom: 1px solid var(--primaryInputBorder);
    border-radius: 5px;
    height: 2.2rem;
    margin-right: 10px;
    ${(props) =>
      props.error ? "border: var(--primaryCancel) solid 1px" : null}
    outline: none;
    width: 18rem;
  }

  .input-group {
    align-items: center;
    display: flex;
  }
  .icon {
  }
  @media ${DEVICES_MAX_WIDTH.tablet} {
    display: grid;
    justify-content: center;
    text-align: center;
  }
`;

export { StyledInputContainer };
