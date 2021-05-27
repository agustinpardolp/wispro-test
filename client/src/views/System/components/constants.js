
export const dataChartHandler = (
  intl,
  accessTimes,
  backgroundColor,
  labels,
  title,
  borderColor
) => {
  const data = {
    labels: labels,
    responsive: true,
    maintainAspectRatio: false,
    datasets: [
      {
        label: intl.formatMessage({ id: `${title}`}),
        data: accessTimes,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };
  return data;
};

