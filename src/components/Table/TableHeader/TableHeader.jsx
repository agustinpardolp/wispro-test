import React from "react";
import { FormattedMessage } from "react-intl";

const TableHeader = ({ col }) => {
  return (
    <>
      {col.sortable ? (
        <td key={col.id} style={col.styles} onClick={col.onClick}>
           <FormattedMessage id={col.name}/>
           {console.log(col)}
          <i className="fas fa-sort" aria-hidden="true">
            ↕
          </i>
        </td>
      ) : (
        <td key={col.id} style={col.styles}>
          <FormattedMessage id={col.name}/>
        </td>
      )}
    </>
  );
};
export default React.memo(TableHeader, (prevProps, nextProps) => {
  return prevProps.col.id === nextProps.col.id;
});
