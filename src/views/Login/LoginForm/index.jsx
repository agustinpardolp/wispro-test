import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import { StyledLogin, StyledCheckContainer, StyledButtonContainer } from "./styled-components";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const LoginForm = ({ values, handleChange, handleSubmit, errors }) => {
  const errorsFormHandler = useCallback(() => {
    return Object.entries(errors).length > 0;
  }, [errors]);

  const handleLoginSubmit = useCallback(
    (e) => {
      e.preventDefault();
      debugger;
      !errorsFormHandler() && handleSubmit();
    },
    [errorsFormHandler, handleSubmit]
  );
  return (
    <StyledLogin>
      <form onSubmit={handleLoginSubmit}>
        <div className="login-container">
          <h2>
            <FormattedMessage id="login.loginTitle" />
          </h2>
          <Input
            name={"email"}
            label={"login.user"}
            handleChange={handleChange}
            type={"text"}
            values={values.email}
            errors={errors.email}
          />
          <Input
            name={"password"}
            label={"login.password"}
            handleChange={handleChange}
            type={"password"}
            values={values.password}
            errors={errors.password}
          />
            <StyledCheckContainer>
            <p>
              <FormattedMessage id="login.session" />
            </p>
            <input
              name={"rememberUser"}
              type="checkbox"
              value={values.rememberUser}
              onChange={handleChange}
            />
          </StyledCheckContainer>
          <StyledButtonContainer>
          <Button
            label={"button.enter"}
            type={!errorsFormHandler() ? "submit" : "text"}
            variant={!errorsFormHandler() ? "confirm" : "disabled"}
          />
        </StyledButtonContainer>
        </div>
      </form>
    </StyledLogin>
  );
};

LoginForm.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
};

export default LoginForm;
