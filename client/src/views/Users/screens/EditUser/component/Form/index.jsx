import React from "react";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import Button from "../../../../../../components/Button";
import Input from "../../../../../../components/Input";
import { errorsFormHandler } from "../../../../../../utils";
import { StyledButtonGroup } from "./styled-components";

const EditUserForm = ({
  values,
  handleChange,
  handleSubmit,
  onClose,
  errors,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col}>
          <Input
            type="text"
            name="name"
            id="name"
            label="userTable.name"
            value={values.name}
            handleChange={handleChange}
            errors={errors.name}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Input
            type="text"
            label="userTable.surname"
            name="surname"
            id="surname"
            value={values.surname}
            handleChange={handleChange}
            errors={errors.surname}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Input
            name="address"
            label="userTable.address"
            handleChange={handleChange}
            type="text"
            value={values.address}
            errors={errors.address}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Input
            type="email"
            label="userTable.email"
            name="email"
            id="email"
            value={values.email}
            handleChange={handleChange}
            errors={errors.email}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Input
            label="userTable.dni"
            type="text"
            name="dni"
            id="dni"
            value={values.dni}
            handleChange={handleChange}
            errors={errors.dni}
          />
        </Form.Group>
      </Form.Row>
      <StyledButtonGroup>
        <Button
          onClick={() => onClose({ type: "hide" })}
          type="text"
          label="button.cancel"
          variant="cancel"
        />
        <Button
          label={"button.enter"}
          type={!errorsFormHandler(errors) ? "submit" : "text"}
          variant={!errorsFormHandler(errors) ? "confirm" : "disabled"}
        />
      </StyledButtonGroup>
    </Form>
  );
};


EditUserForm.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  accessTimes: PropTypes.array,
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  onClose: PropTypes.func,
  errors: PropTypes.object
};

export default EditUserForm;
