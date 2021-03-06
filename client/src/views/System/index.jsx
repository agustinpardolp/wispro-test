import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { FormattedMessage, useIntl } from "react-intl";

import {
  StyledChartContainer,
  StyledMainContainer,
  StyledValue,
} from "./styled-components";
import BarChart from "./components/BarChart";
import SystemLineChart from "./components/SystemLineChart";
import ViewWrapper from "../../components/ViewWrapper";
import { connectionOptions, SOCKET_URL, SOCKET_KEYS } from "./constants";

const System = () => {
  const intl = useIntl();
  const [memory, setMemory] = useState("");
  const [cpu, setCpu] = useState("");
  const [disk, setDisk] = useState("");
  const [network, setNetwork] = useState([]);
  const [seconds, setSeconds] = useState([]);

  const randomGenrator = (value) => {
    return value * Math.round(Math.random() * 5);
  };

  useEffect(() => {
    const socket = io(SOCKET_URL, connectionOptions);
    socket.on(SOCKET_KEYS.connection);
    socket.on(SOCKET_KEYS.cpu, (data) => {
      setCpu(data);
    });
    socket.on(SOCKET_KEYS.memory, (data) => {
      let memory = randomGenrator(data);
      setMemory(memory);
    });
    socket.on(SOCKET_KEYS.disk, (data) => {
      setDisk(data);
    });
    socket.on("seconds", (data) => {
      let transformArray = [
        `${data} sec`,
        `${data + 1} sec`,
        `${data + 2} sec`,
        `${data + 3} sec`,
      ];
      setSeconds(transformArray);
    });
    socket.on(SOCKET_KEYS.network, (data) => {
      let networkFirst = randomGenrator(data);
      let networkSecond = randomGenrator(data);
      let networkThird = randomGenrator(data);
      let networkDataArray = [
        networkFirst,
        networkThird,
        networkSecond,
        networkThird,
      ];
      setNetwork(networkDataArray);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const DataUsage = {
    labelsDataUsage: seconds,
    barColor: "rgba(255, 99, 132, 0.2)",
    title: "barChartDatatUsage.title",
    borderColor: "rgba(255, 99, 132, 1)",
  };

  const DataMemoryUsage = {
    labelsDataUsage: [
      intl.formatMessage({ id: "barChartMemoryUsage.label" }),
      intl.formatMessage({ id: "barChartDiskUsage.title" }),
    ],
    barColor: ["rgba(54, 162, 235, 0.2)", "rgba(243,222,126, 0.2)"],
    title: "barChartMemoryUsage.title",
    borderColor: ["rgba(54, 162, 235, 1)", "rgba(243,222,126, 1)"],
  };

  return (
    <ViewWrapper title="userSystemSubmenu.tab">
      <StyledMainContainer>
        <StyledChartContainer>
          <h3>
            <FormattedMessage id={"barChartCpuUsage.title"} />
          </h3>
          <StyledValue>
            {cpu} <label>%</label>
          </StyledValue>
        </StyledChartContainer>
        <StyledChartContainer>
          <SystemLineChart
            labels={DataUsage.labelsDataUsage}
            title={DataUsage.title}
            barColor={DataUsage.barColor}
            borderColor={DataUsage.borderColor}
            values={network}
          />
        </StyledChartContainer>
        <StyledChartContainer>
          <BarChart
            labels={DataMemoryUsage.labelsDataUsage}
            title={DataMemoryUsage.title}
            barColor={DataMemoryUsage.barColor}
            borderColor={DataMemoryUsage.borderColor}
            values={[memory, disk]}
          />
        </StyledChartContainer>
      </StyledMainContainer>
    </ViewWrapper>
  );
};

export default System;
