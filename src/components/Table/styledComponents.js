import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";

const StyledTable = styled(Table)`
  border-radius: 10px;
  box-shadow: 0 10px 20px rgb(190 239 224), 0 6px 6px rgb(0 0 0 / 70%);
`;
const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: 1.4rem;
`;
const StyledSpan = styled.span`
  display: flex;
  justify-content: start;
`;
const StyledRow = styled.span`
  text-decoration: none;
`;

export { StyledIcon, StyledSpan, StyledRow, StyledTable };
