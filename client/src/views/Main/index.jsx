import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../../components/Navbar/";
import { StyledMain } from "./styled-components";
import MainRouter from "../../routes/Router";
import ToastNotification from "../../components/ToastNotification";

const Main = () => {
  return (
    <StyledMain>
      <Navbar />
      <MainRouter />
      <ToastNotification />
    </StyledMain>
  );
};

export default withRouter(Main);
