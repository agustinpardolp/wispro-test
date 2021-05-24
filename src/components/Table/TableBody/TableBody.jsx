import React from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { withRouter } from "react-router-dom";
import TableRow from "./TableRow";

const TableBody = ({
  formats,
  row,
  DATATYPE,
  history,
  hasToolTip,
  disableLink,
  callBack,
  callBackEdit,
  pathTo,
}) => {
  const openSelectedRow = (row, pathTo) => {
    return (
      pathTo &&
      history.push(`${pathTo[0]}${row.id}${pathTo[1] ? pathTo[1] : ""}`)
    );
  };

  const rowDataHandler = (format, row) => {
    let toolTipActive = false;
    let fieldValue = "";
    switch (format.dataField) {
      case DATATYPE.DATE:
        fieldValue =moment(row[format.dataField]).format("DD/MM/YYYY");
        break;
      default:
        fieldValue = row[format.dataField];
    }

    return (
      <td
        key={uuidv4()}
        onClick={() => !disableLink && openSelectedRow(row, pathTo)}
      >
        <TableRow
          fieldValue={fieldValue}
          toolTipActive={toolTipActive}
          row={row}
          hasToolTip={hasToolTip}
        />
      </td>
    );
  };

  return (
    <tr key={uuidv4()}>
      {formats && formats.map((format) => rowDataHandler(format, row))}
    </tr>
  );
};

export default React.memo(withRouter(TableBody), (prevProps, nextProps) => {
  return prevProps.row.id === nextProps.row.id;
});
