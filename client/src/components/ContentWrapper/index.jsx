import React from "react";
import PropTypes from "prop-types";

import Tabs from "./Tabs";

function ContentWrapper({ tabs, children, colValue, ccsClass }) {
  return (
    <div
      className={`col-md-${colValue ? colValue : 12} infoContainer ${
        ccsClass ? ccsClass : ""
      }`}
    >
      <Tabs tabs={tabs}></Tabs>
      {children}
    </div>
  );
}
ContentWrapper.propTypes = {
  tabs: PropTypes.array,
  children: PropTypes.element,
  colValue: PropTypes.string,
  ccsClass: PropTypes.string,
};
export default ContentWrapper;
