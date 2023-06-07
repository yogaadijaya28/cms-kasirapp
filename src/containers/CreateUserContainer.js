import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { postUserCreate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    // console.log(data);
    this.props.dispatch(postUserCreate(data));
  }

  render() {
    if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
      if (this.props.errorResponseDataUser) {
        swal(
          "Failed",
          this.props.errorResponseDataUser,
          "error"
        );
      } else {
        swal(
          "User Created",
          "Nama :" +
            this.props.getResponseDataUser.name +
            "Alamat :" +
            this.props.getResponseDataUser.domicile,
          "success"
        );
      }
    }

    return (
      <Container>
        <BackComponent />
        <h1>Create User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);
