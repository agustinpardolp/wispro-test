import React, { useEffect, useState, useContext, useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import Table from "../../components/Table";
import {
  fetchUsers,
  deleteUser,
  updateUser,
} from "../../store/actions/usersActions";
import { StyledUserContainer, StyledDataWrapper } from "./styled-components";
import { resetOptionHandler, MODAL_TYPE, columnHandler } from "./constants";
import Submenu from "./components/Submenu";
import AccessInfo from "./screens/AccessInfo";
import { ModalContext } from "../../context/ModalContext";
import EditUser from "./screens/EditUser";

export const Users = ({ fetchUsers, userList, deleteUser, updateUser }) => {
  const [filteredList, setFilteredList] = useState([]);
  const [dataTable, setDataTable] = useState(userList);
  const [option, setOption] = useState("");
  let { dispatch } = useContext(ModalContext);
  const intl = useIntl();

  useEffect(() => {
    fetchUsers();
  }, [dataTable, fetchUsers]);

  const handleSelectOption = useCallback(
    (e) => {
      if (
        e.target.value === resetOptionHandler(intl)[0].accessor ||
        e.target.value === intl.formatMessage({ id: "userFilter.select" })
      ) {
        clearFilters();
      } else {
        setOption(e.target.value);
        let optionList =
          userList &&
          userList.map((user, i) => {
            return { Header: user[e.target.value], id: i };
          });
        setFilteredList(optionList);
      }
    },
    [userList]
  );

  const clearFilters = () => {
    setFilteredList([]);
    setDataTable([]);
    setOption("");
  };

  const handleSelectFilter = useCallback(
    (e) => {
      let data = userList.filter((user) => user[option] === e.target.value);
      setDataTable(data);
    },
    [option, userList]
  );

  const handleDelete = (data) => {
    dispatch({
      type: "show",
      modalType: MODAL_TYPE.DELETE,
      modalProps: {
        title: "userModalDelete.title",
        message: "userModalDelete.subtitle",
        open: true,
        handleAsyncConfirm: deleteUser,
        handleConfirm: () => dispatch({ type: "hide" }),
        posResponse: fetchUsers,
        data: data.dni,
      },
    });
  };

  const handleEdit = (data) => {
    dispatch({
      type: "show",
      modalType: MODAL_TYPE.EDIT,
      modalProps: {
        title: "userModalEdit.title",
        message: "userModalEdit.subtitle",
        open: true,
        size: "lg",
        children: (
          <EditUser
            data={data}
            handleAsyncConfirm={updateUser}
            posResponse={fetchUsers}
            onClose={dispatch}
            intl={intl}
          />
        ),
      },
    });
  };

  const handleAccessInfo = (data) => {
    dispatch({
      type: "show",
      modalType: MODAL_TYPE.INFO,
      modalProps: {
        title: "barChart.title",
        message: "barChart.subtitle",
        open: true,
        data: data,
        size: "lg",
        children: <AccessInfo data={data} />,
      },
    });
  };

  return (
    <>
      <StyledUserContainer>
        <Submenu
          filteredList={filteredList}
          handleSelectOption={handleSelectOption}
          handleSelectFilter={handleSelectFilter}
          intl={intl}
        />
        <StyledDataWrapper>
          <Table
            columns={columnHandler(intl)}
            data={dataTable.length ? dataTable : userList}
            callBackDelete={handleDelete}
            callBackEdit={handleEdit}
            callBack={handleAccessInfo}
          />
        </StyledDataWrapper>
      </StyledUserContainer>
    </>
  );
};

export const mapStateToProps = (state) => {
  const {
    users: { data: userList, status },
  } = state;
  return {
    userList,
    status,
  };
};

export const mapDispatchToProps = {
  fetchUsers,
  deleteUser,
  updateUser,
};

Users.propTypes = {
  fetchUsers: PropTypes.func,
  deleteUser: PropTypes.func,
  updateUser: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
