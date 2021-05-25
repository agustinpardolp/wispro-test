import styled from "styled-components";

const StyledButton = styled.button`
  align-items: center;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  border: 2px solid;
  border-radius: 5rem;
  color: ${(props) => (props.fontColor ? props.fontColor : "var(--primary)")};
  display: flex;
  font-size: 1rem;
  height: 1rem;
  justify-content: center;
  justify-self: center;
  ${(props) => (props.borderColor ? props.borderColor : "var(--primary)")};
  outline: none;
  padding: 1.2rem;
  transition: 1s;
  width: 10rem;
  &&:hover {
      background: ${(props) =>
      props.borderColor ? props.borderColor : "var(--primary)"};
    color: ${(props) =>
      props.backgroundColor
        ? "var(--primaryFont)"
        : "var(--primaryFontReverse)"};
    transition: 1s;
  }
`;

export { StyledButton };
