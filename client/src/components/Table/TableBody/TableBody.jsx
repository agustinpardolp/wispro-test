import React from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { StyledTd } from "../styledComponents";

const TableBody = ({
  formats,
  row,
  DATATYPE,
  callBack,
  callBackEdit,
  callBackDelete,
}) => {
  const openSelectedRow = (row) => callBack(row);

  const rowDataHandler = (format, row) => {
    let fieldValue = "";
    switch (format.dataField) {
      case DATATYPE.DATE:
        fieldValue = moment(row[format.dataField]).format("DD/MM/YYYY");
        break;
      default:
        fieldValue = row[format.dataField];
    }
    return (
      <StyledTd key={uuidv4()} onClick={() => openSelectedRow(row)}>
        <span>{fieldValue}</span>
      </StyledTd>
    );
  };

  return (
    <tr key={uuidv4()}>
      {formats && formats.map((format) => rowDataHandler(format, row))}
      <StyledTd>
        <FontAwesomeIcon icon={faEdit} onClick={() => callBackEdit(row)} />
      </StyledTd>
      <StyledTd>
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => callBackDelete(row)}
        />
      </StyledTd>
    </tr>
  );
};

export default TableBody;
