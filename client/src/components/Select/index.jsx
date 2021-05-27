import React from "react";
import { Form } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import { StyledSelectContainer } from "./styled-components";
import PropTypes from "prop-types";

const Select = ({
  options,
  title,
  handleSelectOption,
  icon,
  disableTranslation,
}) => {
  const intl = useIntl();
  return (
    <StyledSelectContainer>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
          <Form.Label>
            {title && (
              <>
                {icon && icon} <FormattedMessage id={title} />
              </>
            )}
          </Form.Label>
          <Form.Control
            as="select"
            size="sm"
            custom
            onChange={handleSelectOption}
            defaultValue={intl.messages["userFilter.select"]}
          >
            {options &&
              options.map((option) => {
                const label = disableTranslation
                  ? option.name
                  : intl.messages[option.Header];
                return (
                  <option
                    key={option.id}
                    value={option.accessor}
                  >
                    {option.Header}
                  </option>
                );
              })}
            <option>{intl.messages["userFilter.select"]}</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </StyledSelectContainer>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  handleSelectOption: PropTypes.func,
  icon: PropTypes.element,
  disableTranslation: PropTypes.bool,
};

export default Select;
