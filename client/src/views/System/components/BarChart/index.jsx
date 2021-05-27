import React from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import { dataChartHandler } from "../constants";

const BarChart = ({ barColor, title, labels, borderColor, values }) => {
  const intl = useIntl();
  const data = dataChartHandler(
    intl,
    values,
    barColor,
    labels,
    title,
    borderColor
  );
  return <Bar data={data} />;
};

BarChart.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  accessTimes: PropTypes.array,
};

export default BarChart;
