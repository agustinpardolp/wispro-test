import React from "react";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Select from "../../../../components/Select";
import PropTypes from "prop-types";

import { StyledTitle, StyledOptions } from "./styled-components";
import { tableColumns, resetOption } from "../../constants";

const Submenu = ({ handleSelectOption, filteredList, handleSelectFilter }) => {
  return (
    <div>
      <StyledTitle>
        <FormattedMessage id="userTable.title" />
      </StyledTitle>
      <StyledOptions>
        <Select
          title={"userFilter.title"}
          handleSelectOption={handleSelectOption}
          options={[...tableColumns, ...resetOption]}
          icon={<FontAwesomeIcon icon={faFilter} />}
        />
        {!!filteredList.length && (
          <Select
            handleSelectOption={handleSelectFilter}
            options={filteredList}
            icon={<FontAwesomeIcon icon={faFilter} />}
            disableTranslation
          />
        )}
      </StyledOptions>
    </div>
  );
};

Submenu.propTypes = {
  handleSelectOption: PropTypes.func,
  handleSelectFilter: PropTypes.func,
  filteredList: PropTypes.array,
  option: PropTypes.string
};

export default Submenu;
