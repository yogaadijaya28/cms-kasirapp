import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Button, Col, FormGroup, Row } from "react-bootstrap";
import { Input, Label } from "reactstrap";
import { userValidation } from "../validations/userValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor=" {input} " className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col>
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}> {error} </p>) ||
          (warning && <p style={{ color: "brown" }}> {warning} </p>))}
    </Col>
  </Row>
);

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Nama :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="domicile"
                component={renderField}
                label="Alamat :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="age"
                component={renderField}
                label="Umur :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="contact"
                component={renderField}
                label="Nomor HP :"
              />
            </FormGroup>
          </Col>
        </FormGroup> <br />

        <FormGroup row>
          <Col md={12}>
            <FormGroup>
              <Button
                variant="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate : userValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect()(FormComponent);
