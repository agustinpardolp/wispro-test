import styled from "styled-components";

const StyledUserContainer = styled.section`

`;

const StyledDataWrapper = styled.div`
  height: ${(props) => (props.height && props.height)};
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.backgroundImage
      ? `url("${props.backgroundImage}") no-repeat center`
      : props.background
      ? props.background
      : `url("images/Backgrounds/Bg_Header.png") no-repeat center`};
  background-size: ${(props) => (props.backgroundSize ? "contain" : "cover")};
  padding: 1%;
  .text-light {
    font-weight: normal;
  }
`;

export { StyledUserContainer, StyledDataWrapper };
