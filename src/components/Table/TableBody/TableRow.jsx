import React from "react";

const TableRow = ({ fieldValue, toolTipActive, row, hasToolTip }) => {
  return (
    <>
            <span>{fieldValue}</span>
      {/* <ToolTip
        toolTipActive={toolTipActive}
        messageInfo={
          hasToolTip
            ? row["company_name"] && row["company_name"].length
              ? row["company_name"]
              : `${row["person_first_name"]} ${row["person_last_name_1"]}`
            : null
        }
      >
        <span>{fieldValue}</span>
      </ToolTip> */}
    </>
  );
};

export default React.memo(TableRow);
