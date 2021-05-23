import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { StyledNavbar } from "./styled-components";
import { useModal } from "../../hooks";
import { logout } from "../../store/actions/loginActions";
import Modal from "../Modal";
import Button from "../Button";
import { FormattedMessage } from "react-intl";
import Menu from "./Menu";

export const Navbar = ({ location, history, user, logout }) => {
  const { showModal, hideModal } = useModal(false);
  let tokenData = JSON.parse(localStorage.getItem("token_data"));
  const handleLogout = useCallback(() => {
    hideModal();
    logout();
    history.push("/login");
  }, [hideModal, history, logout]);

  return (
    <>
      <StyledNavbar>
        <StyledNavbar.Brand>
          <FormattedMessage id="navbar.title" />
        </StyledNavbar.Brand>
        <Menu token={tokenData || user.uid}/>
      </StyledNavbar>
      <Modal
        show={showModal}
        onConfirm={handleLogout}
        onHide={hideModal}
        label="modal.message"
      />
    </>
  );
};
export const mapStateToProps = (state) => {
  const {
    login: { user },
  } = state;
  return {
    user,
  };
};

const mapDispatchToProps = {
  logout,
};
Navbar.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  // token: PropTypes.object,
  logout: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withRouter(
    React.memo(Navbar, (prevProps, nextProps) => {
      return prevProps.location === nextProps.location;
    })
  )
);
