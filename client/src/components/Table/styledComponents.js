import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";

const StyledTable = styled(Table)`
  box-shadow: 0 10px 20px rgb(190 239 224), 0 6px 6px rgb(0 0 0 / 70%);
  .table {
    .icon-td {
      padding: 0.1rem;
    }
    tbody {
      height: 200px;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
`;

const StyledTd = styled.td`
  cursor: pointer;
  span {
    &:hover {
      color: var(--hoverColor);
    }
  }
  label {
    margin-left: 5px;
  }
`;
const StyledTr = styled.tr`
  height: 6vh;
`;
export { StyledTable, StyledTd, StyledTr };
