import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { DEVICES_MAX_WIDTH } from "../../constants";
import { HashLink as Link } from "react-router-hash-link";

const StyledNavbar = styled(Navbar)`
  background: linear-gradient(
    to top right,
    var(--primary),
    var(--primaryConfirm)
  );
  height: 12vh;
  justify-content: space-between;
  padding: 0px 30px;
  .navbar-brand {
    font-size: 1.5rem;
    color: var(--primaryFontReverse);
    cursor: pointer;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "var(--primary)" : "var(--thirdColor)")};
`;
const StyledMenu = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  width: 25%;
  li {
    cursor: pointer;
    flex: auto;
    padding: 1.5rem;
    text-align: center;
  }
  .navbar-button_translation-container {
    display: flex;
    list-style: none;
    li {
      color: var(--primaryFontReverse);
    }
    @media ${DEVICES_MAX_WIDTH.laptop} {
      display: flex;
      li {
        padding: 0;
      }
    }
  }

  @media ${DEVICES_MAX_WIDTH.laptop} {
    display: ${(props) => (props.display ? "block" : "none")};
    height: 50vh;
    background: #f7f7f7;
    position: relative;

    li {
      &&:hover {
        background: "var(--primary)";
        transition: 1s;
      }
    }
  }
`;

// const StyledBarsIcon = styled(FontAwesomeIcon)`
//   font-size: 2rem;
//   display: none;
//   @media ${DEVICES_MAX_WIDTH.laptop} {
//     /* flex-flow: column nowrap; */
//     display: inline;
//   }
// `;
export { StyledNavbar, StyledLink, StyledMenu };
