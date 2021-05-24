import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledUserContainer = styled.section`
  .home_benefits {
    padding: 2rem;
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "5%")};
    margin-right: ${(props) => (props.marginRight ? props.marginRight : "5%")};

    p {
      font-size: 2.4rem;
      text-align: center;
      margin-top: 3rem;
      margin-bottom: 4rem;
      font-size: ${(props) => props.paragraphSize && props.paragraphSize};
      width: 100%;
      font-weight: bold;
    }
    @media ${DEVICES_MAX_WIDTH.laptop} {
      display: contents;
      h2 {
        font-size: 2rem;
        text-align: center;
        margin: 2.2rem;
      }
      p {
        font-size: ${(props) => props.paragraphSize && props.paragraphSize};
        font-size: 2rem;
        width: 90%;
        font-weight: normal;
      }
    }
  }
  .home_final-content {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 2rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    p,
    span {
      font-size: 2.4rem;
    }
  }
  .home_final-content > span {
    text-align: center;
    font-size: 2rem;
  }

  .home_benefits_list-container {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5rem;
    @media ${DEVICES_MAX_WIDTH.laptop} {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media ${DEVICES_MAX_WIDTH.tablet} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    div {
      display: grid;
      justify-content: center;
      align-items: center;
      width: 7rem;
      justify-self: center;
    }
    img {
      justify-self: center;
    }
    label {
      margin-top: 1rem;
      text-align: center;
    }
  }
  .home_span-primary {
    color: var(--primary);
  }
  .home_span_confirm {
    color: var(--primaryConfirm);
  }
  .home_requirements-list {
    li {
      display: flex;
      font-size: 1.5rem;
      list-style: none;
      margin: 2rem;
    }
    li > img {
      margin-right: 1rem;
    }
  }
`;

const StyledHomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "10%")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "10%")};
  margin-bottom: ${(props) => (props.marginRight ? props.marginRight : "2%")};
  align-items: center;
  p {
    font-size: ${(props) => props.paragraphSize && props.paragraphSize};
    width: 62%;
    font-weight: bold;
  }
  @media ${DEVICES_MAX_WIDTH.laptop} {
    display: contents;
    p {
      font-size: 2.2rem;
      width: 100%;
      text-align: center;
      font-weight: normal;
    }
  }
`;

const StyledDataWrapper = styled.div`
  height: ${(props) => (props.height ? props.height : "30rem")};
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

const StyledDivContainer = styled.div`
  display: grid;
  height: 50%;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    color: var(--primary);
  }
  h2,
  span {
    font-size: 3rem;
  }
  svg {
    color: white;
    font-size: 3rem;
    margin-right: 3%;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div > span {
    color: white;
    font-size: 1.4rem;
  }
`;
export { StyledUserContainer, StyledHomeWrapper, StyledDataWrapper, StyledDivContainer };
