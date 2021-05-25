import React from "react";

import { Form, Col } from "react-bootstrap";
import Button from "../../../../../../components/Button";
import { StyledButtonGroup } from "./styled-components";
import { FormattedMessage } from "react-intl";

const EditUserForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  onClose,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} >
          <Form.Label>
            <FormattedMessage id={"userTable.name"} />
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            handleBlur={handleBlur}
            value={values.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>
            <FormattedMessage id={"userTable.surname"} />
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Surname"
            name="surname"
            id="surname"
            handleBlur={handleBlur}
            value={values.surname}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>
            <FormattedMessage id={"userTable.address"} />
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            name="address"
            id="address"
            handleBlur={handleBlur}
            value={values.address}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} >
          <Form.Label>
            <FormattedMessage id={"userTable.email"} />
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            handleBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>
            <FormattedMessage id={"userTable.dni"} />
          </Form.Label>
          <Form.Control
            placeholder="dni"
            type="text"
            name="dni"
            id="dni"
            handleBlur={handleBlur}
            value={values.dni}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>
      <StyledButtonGroup>
        <Button
          onClick={()=> onClose({ type: "hide" })}
          type="text"
          label="button.cancel"
          variant="cancel"
        />
        <Button type="submit" label="button.confirm" variant="confirm" />
      </StyledButtonGroup>
    </Form>
  );
};

export default EditUserForm;
