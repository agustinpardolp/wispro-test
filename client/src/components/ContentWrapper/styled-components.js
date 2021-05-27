import styled from "styled-components";
import { Nav } from "react-bootstrap";

const StyledNav = styled(Nav)`
  display: flex;
  height: 5vh;
  margin: 5px;
`;

const StyledNavItem = styled(Nav.Item)`
  border-radius: 8px;
  a {
    color: var(--primary-titles);
  }
`;

export { StyledNav, StyledNavItem };
