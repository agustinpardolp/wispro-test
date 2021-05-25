import React from "react";
import { Link, withRouter } from "react-router-dom";
import { StyledNavItem, StyledNav } from "../styled-components";
import { FormattedMessage } from "react-intl";

function Tab({ tabs, location }) {
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

export default withRouter(Tab);
