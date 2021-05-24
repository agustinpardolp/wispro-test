import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { StyledTable } from "./styledComponents";

const Table = ({ columns, data, className, callBack, callBackEdit, path }) => {
  const DATATYPE = {
    DATE: "creationDate",
    NAME: "name",
    EMAIL: "email",
    SURNAME: "surname",
    ADDRESS: "address",
    DOCUMENT: "dni",
    EDIT: "edit",
  };

  let formats = [];
  const renderHeader = (columns, disableHeader) => {
    return (
      <tr>
        {columns && columns.length ? (
          columns.map((col) => {
            let currentFormat = col.format ? col.format : "text";
            formats.push({ format: currentFormat, dataField: col.dataField });
            return !disableHeader ? (
              <TableHeader key={col.id} col={col} />
            ) : null;
          })
        ) : (
          <th />
        )}
      </tr>
    );
  };

  const renderBody = (data, disableLink) => {
    if (data && data.length > 0) {
      return data.map((row) => {
        return (
          <TableBody
            key={row.serial || row.id}
            formats={formats}
            row={row}
            DATATYPE={DATATYPE}
            disableLink={disableLink}
            callBack={callBack}
            pathTo={path}
            callBackEdit={callBackEdit}
          />
        );
      });
    } else
      return (
        <tr>
          <td
            align={"center"}
            colSpan={columns && columns.length > 0 ? columns.length : 1}
          >
            <FormattedMessage id="usersTable.noData" />
          </td>
        </tr>
      );
  };

  return (
    <>
      <StyledTable
        responsive
      >
        <thead>{renderHeader(columns)}</thead>
        <tbody>{renderBody(data)}</tbody>
      </StyledTable>
    </>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  className: PropTypes.string,
  callBack: PropTypes.func,
  callBackEdit: PropTypes.func,
  path: PropTypes.string,
};

export default React.memo(Table);
