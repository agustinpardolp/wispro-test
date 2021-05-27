import styled from "styled-components";

const StyledDivider = styled.div`
  margin: 2rem;
  border: 0.5px solid #06031114;
  margin: 2rem;
  box-shadow: ${(props) =>
    props.disableShadow ? "none" : "0 1px 17px 1px #06031154"};
`;

export { StyledDivider };
