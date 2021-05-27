import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { StyledNavItem, StyledNav } from "../styled-components";

function Tab({ tabs }) {
  if (!tabs) return null;
  return (
    <StyledNavItem className="nav nav-tabs nav-pills rounded-nav">
      {tabs.map((tab, i) => {
        return (
          <StyledNav key={i} className="nav-item">
            <Link className="nav-link" to={tab.route}>
              <FormattedMessage id={tab.name} />
            </Link>
          </StyledNav>
        );
      })}
    </StyledNavItem>
  );
}
Tab.propTypes = {
  tabs: PropTypes.array,
};
export default withRouter(Tab);
