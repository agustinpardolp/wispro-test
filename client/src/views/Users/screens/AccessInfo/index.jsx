import React from "react";
import PropTypes from "prop-types";

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

AccessInfo.propTypes = {
  data: PropTypes.object,
};

export default AccessInfo;
