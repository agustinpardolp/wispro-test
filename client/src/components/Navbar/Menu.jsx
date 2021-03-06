import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Button from "../Button";
import { Context } from "../LenguageWrapper";

import { StyledMenu } from "./styled-components";

const Menu = ({ display, token, openModal }) => {
  const context = useContext(Context);
  const hasToken = token && token.length;

  return (
    <>
      <StyledMenu display={display}>
        <li>
          <ul className="navbar-button_translation-container">
            <li value="en-us" onClick={context.changeLanguage}>
              <FormattedMessage id="header.english" />
            </li>
            <li value="en-es" onClick={context.changeLanguage}>
              <FormattedMessage id="header.spanish" />
            </li>
          </ul>
        </li>
        <li className="navbar-button-container">
          {hasToken && (
            <Button label={"button.logout"} variant={"logout"} onClick={openModal} />
          )}
        </li>
      </StyledMenu>
    </>
  );
};

Menu.propTypes = {
  pathname: PropTypes.string,
  display: PropTypes.bool,
  history: PropTypes.object,
  token: PropTypes.object,
  openModal: PropTypes.func,
};

export default React.memo(Menu);
