import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import ErrorMessage from "../../components/ErrorMessage";
import { StyledInputContainer } from "./styled-components";

const Input = ({
  values,
  errors,
  label,
  disableLabel,
  handleChange,
  handleClick,
  handleBlur,
  touched,
  type,
  className,
  id,
  placeholder,
  name,
  tabIndex,
  disableErrors,
  iconType,
  style,
  checked,
}) => {
  return (
    <StyledInputContainer>
      {disableLabel ? null : (
        <div className="label">
          <label htmlFor="">
            <FormattedMessage id={label} />
          </label>
        </div>
      )}
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        id={id}
        value={values}
        name={name}
        style={style}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={handleClick}
        tabIndex={tabIndex}
        error={touched && errors}
        checked={checked}
      />
      {disableErrors ? null : <ErrorMessage errorMessage={errors} />}
    </StyledInputContainer>
  );
};
Input.propTypes = {
  values: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.string,
  touched: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  tabIndex: PropTypes.string,
  disableErrors: PropTypes.bool,
  disableLabel: PropTypes.bool,
  style: PropTypes.object,
  iconIsActive: PropTypes.bool,
  iconClass: PropTypes.string,
  iconType: PropTypes.object,
  checked: PropTypes.bool,
};
export default Input;
