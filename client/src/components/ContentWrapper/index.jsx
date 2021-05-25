import React from "react";
import Tabs from "./Tabs";

function ContentWrapper({ tabs, children, colValue, ccsClass}) {

  return (
    <div className={`col-md-${colValue?colValue:12} infoContainer ${ccsClass?ccsClass:""}`}>
      <Tabs tabs={tabs}></Tabs>
      {children}
    </div>
  );
}

export default ContentWrapper;
