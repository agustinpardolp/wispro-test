import React from "react";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { StyledTd } from "../styledComponents";

const TableHeader = ({ col, onHandleSort }) => {
  return (
    <>
      {col.sortable ? (
        <StyledTd
          key={col.id}
          style={col.styles}
          onClick={onHandleSort}
        >
          <FormattedMessage id={col.name} />
          <label>
            <FontAwesomeIcon icon={faSort} />
          </label>
        </StyledTd>
      ) : (
        <td key={col.id} style={col.styles}>
          <FormattedMessage id={col.name} />
        </td>
      )}
    </>
  );
};
export default React.memo(TableHeader, (prevProps, nextProps) => {
  return prevProps.col.id === nextProps.col.id;
});
