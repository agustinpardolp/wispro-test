import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { StyledNavbar } from "./styled-components";
import { logout } from "../../store/actions/loginActions";
import { FormattedMessage } from "react-intl";
import Menu from "./Menu";
import { ModalContext } from "../../context/ModalContext";
import { MODAL_TYPE } from "./constants";

export const Navbar = ({  history, token, logout }) => {
  let { dispatch } = useContext(ModalContext);
  let tokenData = JSON.parse(localStorage.getItem("token_data"));
  const handleLogout = useCallback(() => {
    logout();
    history.push("/login");
  }, [history, logout]);

  const handleDelete = (data) => {
    dispatch({
      type: "show",
      modalType: MODAL_TYPE.LOGOUT,
      modalProps: {
        title: "userLogout.title",
        message: "userLogout.message",
        open: true,
        handleConfirm: handleLogout,
        data: data.dni,
      },
    });
  };
  return (
    <>
      <StyledNavbar bg="dark">
        <StyledNavbar.Brand>
          <FormattedMessage id="navbar.title" />
        </StyledNavbar.Brand>
        <Menu token={tokenData || token} openModal={handleDelete} />
      </StyledNavbar>
    </>
  );
};
export const mapStateToProps = (state) => {
  const {
    login: {
      user: { token },
    },
  } = state;
  return {
    token: token,
  };
};

const mapDispatchToProps = {
  logout,
};
Navbar.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
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
