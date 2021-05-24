import React, { useEffect, useState, useMemo, useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "../../components/Table";
import { fetchUsers } from "../../store/actions/usersActions";
import { StyledUserContainer, StyledDataWrapper } from "./styled-components";
import { tableColumns, resetOption } from "./constants";
import Submenu from "./components/Submenu";

export const Users = ({ fetchUsers, userList }) => {
  const [filteredList, setFilteredList] = useState([]);
  const [dataTable, setDataTable] = useState(userList);
  const [option, setOption] = useState("");
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSelectOption = useCallback(
    (e) => {
      if (e.target.value === resetOption[0].dataField) {
        clearFilters();
      } else {
        setOption(e.target.value);
        let optionList =
          userList &&
          userList.map((user, i) => {
            return { name: user[e.target.value], id: i };
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

  return (
    <StyledUserContainer>
      <Submenu
        filteredList={filteredList}
        handleSelectOption={handleSelectOption}
        handleSelectFilter={handleSelectFilter}
      />
      <StyledDataWrapper>
        <Table
          columns={tableColumns}
          data={dataTable.length ? dataTable : userList}
        />
      </StyledDataWrapper>
    </StyledUserContainer>
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
};

Users.propTypes = {
  fetchUsers: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
