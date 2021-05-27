import React from "react";
import { FormattedMessage } from "react-intl";
import { StyledButton } from "./styled-components";
import PropTypes from "prop-types";

function Button({ onClick, label, variant, type }) {
  const handleVariant = (variant) => {
    let settings = {
      borderColor: "var(--primary)",
      fontColor: "white",
      backgroundColor: "var(--primary)",
      disabled: false,
    };
    switch (variant) {
      case "confirm":
        settings = {
          borderColor: "var(--primaryConfirm)",
          fontColor: "white",
          backgroundColor: "var(--primaryConfirm)",
          disabled: false,
        };
        break;
      case "cancel":
        settings = {
          borderColor: "var(--primaryCancel)",
          fontColor: "white",
          backgroundColor: "var(--primaryCancel)",
          disabled: false,
        };
        break;
      case "neutral":
        settings = {
          borderColor: "var(--primary)",
          fontColor: "white",
          backgroundColor: "none",
          disabled: false,
        };
        break;
      case "disabled":
        settings = {
          borderColor: "var(--primaryInputBorder)",
          fontColor: "white",
          disabled: true,
          backgroundColor: "var(--primaryInputBorder)",
        };
        break;
      case "login":
        settings = {
          borderColor: "var(--primary)",
          fontColor: "var(--primary)",
          backgroundColor: "white",
          disabled: false,
        };
        break;
      case "logout":
        settings = {
          borderColor: "var(--primaryInputBorder)",
          fontColor: "var(--primaryInputBorder)",
          backgroundColor: "white",
          disabled: false,
        };
        break;
      default:
        return settings;
    }

    return settings;
  };
  let buttonSetup = handleVariant(variant);
  return (
    <StyledButton
      onClick={onClick}
      borderColor={buttonSetup.borderColor}
      fontColor={buttonSetup.fontColor}
      backgroundColor={buttonSetup.backgroundColor}
      type={type}
      disabled={buttonSetup.disabled}
    >
      <FormattedMessage id={label} />
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "confirm",
    "cancel",
    "neutral",
    "disabled",
    "login",
    "logout",
  ]),
  type: PropTypes.oneOf(["text", "submit"]),
};

export default Button;
