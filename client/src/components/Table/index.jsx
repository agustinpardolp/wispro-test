import React, { useCallback } from "react";
import { useTable, useSortBy } from 'react-table'
import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { StyledTable } from "./styledComponents";
import { DATA_TYPE } from "./constants";

const Table = ({
  columns,
  data,
  className,
  callBack,
  callBackEdit,
  callBackDelete,
  path,
}) => {
  const formats = [];
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )
  const renderHeader = (columns) => {
    return (
      <tr>
        {headerGroups && headerGroups.length ? (
          <>
            {headerGroups.map((col) => {
              formats.push({ format: "text", dataField: col.dataField });
              return (
                <TableHeader
                  key={col.id}
                  col={col}
                />
              );
            })}
            <td>
              <FormattedMessage id={"userTable.edit"} />
            </td>
            <td>
              <FormattedMessage id={"userTable.delete"} />
            </td>
          </>
        ) : (
          <th />
        )}
      </tr>
    );
  };

  const renderBody = useCallback((data, sortDirection) => {
    if (data && data.length > 0) {
      return data.map((row) => {
        return (
          <TableBody
            key={row.serial || row.id}
            formats={formats}
            row={row}
            DATATYPE={DATA_TYPE}
            callBack={callBack}
            pathTo={path}
            callBackEdit={callBackEdit}
            callBackDelete={callBackDelete}
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
  },[callBack, callBackDelete, callBackEdit, columns, formats, path]);

  return (
    <>
      <StyledTable responsive className={className} {...getTableProps()}>
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
  callBackDelete: PropTypes.func,
  path: PropTypes.string,
};

export default Table;
