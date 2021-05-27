
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

export const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
  timeout: 10000, //before connect_error and connect_timeout are emitted.
  transports: ["websocket"],
};