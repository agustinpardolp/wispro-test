import React from "react";

import LineChart from "../../components/LineChart";

const AccessInfo = ({ data }) => {
  return (
    <div>
      <LineChart
        name={data.name}
        surname={data.surname}
        accessTimes={data.accessTimes}
      />
    </div>
  );
};
export default AccessInfo;
