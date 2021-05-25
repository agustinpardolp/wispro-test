import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";

import { dataChartGenerator } from "./constants";

const LineChart = ({ name, surname, accessTimes }) => {
  const intl = useIntl();
  const data = dataChartGenerator(intl, accessTimes);
  return (
    <>
      <h5>
        {name} {surname}
      </h5>
      <Line height={400} width={500} data={data} />
    </>
  );
};

LineChart.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  accessTimes: PropTypes.array
};
export default LineChart;
