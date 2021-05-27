import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";

import { dataChartHandler } from "../constants";

const SystemLineChart = ({ barColor, title, labels, borderColor, values }) => {
  const intl = useIntl();
  const data = dataChartHandler(
    intl,
    values,
    barColor,
    labels,
    title,
    borderColor
  );
  return <Line data={data} />;
};

SystemLineChart.propTypes = {
  barColor: PropTypes.string,
  title: PropTypes.string,
  labels: PropTypes.string,
  borderColor: PropTypes.string | PropTypes.array,
  values: PropTypes.array,
};
export default SystemLineChart;
