import React from "react";
import { useTable, useSortBy } from "react-table";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

import { StyledTable, StyledTd, StyledTr } from "./styledComponents";

const Table = ({ columns, data, callBack, iconList }) => {
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
              <th>
                <FormattedMessage id={"userTable.map"} />
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
                    {iconList.map((data) => {
                      return (
                        <StyledTd>
                          <FontAwesomeIcon
                            icon={data.icon}
                            onClick={() => {
                              data.callback(row.original);
                            }}
                          />
                        </StyledTd>
                      );
                    })}
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
  icons: PropTypes.array,
};

export default Table;
