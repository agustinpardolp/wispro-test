import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Select from "../../../../components/Select";
import ViewWrapper from "../../../../components/ViewWrapper";
import PropTypes from "prop-types";

import { StyledOptions } from "./styled-components";
import { columnHandler, resetOptionHandler } from "../../constants";

const Submenu = ({ handleSelectOption, filteredList, handleSelectFilter, intl }) => {
  return (
    <ViewWrapper title={"userTable.title" }>
      <StyledOptions>
        <Select
          title={"userFilter.title"}
          handleSelectOption={handleSelectOption}
          options={[...columnHandler(intl), ...resetOptionHandler(intl)]}
          icon={<FontAwesomeIcon icon={faFilter} />}
        />
        {!!filteredList?.length && (
          <Select
            handleSelectOption={handleSelectFilter}
            options={filteredList}
            icon={<FontAwesomeIcon icon={faFilter} />}
            disableTranslation
          />
        )}
      </StyledOptions>
    </ViewWrapper>
  );
};

Submenu.propTypes = {
  handleSelectOption: PropTypes.func,
  handleSelectFilter: PropTypes.func,
  filteredList: PropTypes.array,
  option: PropTypes.string,
  intl: PropTypes.func
};

export default Submenu;
