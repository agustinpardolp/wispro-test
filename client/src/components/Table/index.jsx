import React from "react";
import { useTable, useSortBy } from "react-table";
import PropTypes from "prop-types";
import { StyledTable, StyledTd, StyledTr } from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage } from "react-intl";
import {
  faTrashAlt,
  faEdit,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

const Table = ({ columns, data, callBack, callBackEdit, callBackDelete }) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <>
      <StyledTable striped bordered hover size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FontAwesomeIcon icon={faSortDown} />
                      ) : (
                        <FontAwesomeIcon icon={faSortUp} />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
              <th>
                <FormattedMessage id={"userTable.edit"} />
              </th>
              <th>
                <FormattedMessage id={"userTable.delete"} />
              </th>
            </tr>
          ))}
        </thead>
        <tbody>
          <>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <>
                  <StyledTr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <StyledTd
                          {...cell.getCellProps()}
                          onClick={() => callBack(row.original)}
                        >
                          {cell.render("Cell")}
                        </StyledTd>
                      );
                    })}
                    <StyledTd>
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => {
                          console.log(row);
                          callBackEdit(row.original);
                        }}
                      />
                    </StyledTd>
                    <StyledTd>
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => callBackDelete(row.original)}
                      />
                    </StyledTd>
                  </StyledTr>
                </>
              );
            })}
          </>
        </tbody>
      </StyledTable>
    </>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  callBack: PropTypes.func,
  callBackEdit: PropTypes.func,
  callBackDelete: PropTypes.func,
};

export default Table;
