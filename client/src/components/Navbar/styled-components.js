import styled from "styled-components";
import { Navbar } from "react-bootstrap";
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
  }`

export { StyledNavbar, StyledLink, StyledMenu };
