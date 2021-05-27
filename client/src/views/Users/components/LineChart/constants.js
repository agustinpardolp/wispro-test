export const dataChartGenerator = (intl, accessTimes) => {
  const data = {
    labels: [
      intl.formatMessage({ id: "barChart.monday" }),
      intl.formatMessage({ id: "barChart.tuesday" }),
      intl.formatMessage({ id: "barChart.Wednesday" }),
      intl.formatMessage({ id: "barChart.Thursday" }),
      intl.formatMessage({ id: "barChart.Friday" }),
      intl.formatMessage({ id: "barChart.Saturday" }),
      intl.formatMessage({ id: "barChart.Sunday" }),
    ],
    datasets: [
      {
        label: intl.formatMessage({ id: "barChart.label" }),
        data: accessTimes,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return data;
};
