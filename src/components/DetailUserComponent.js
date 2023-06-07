import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td> {props.getUserDetail.name} </td>
        </tr>
        <tr>
          <td width="200">Alamat</td>
          <td width="10">:</td>
          <td> {props.getUserDetail.domicile} </td>
        </tr>
        <tr>
          <td width="200">Umur</td>
          <td width="10">:</td>
          <td> {props.getUserDetail.age} </td>
        </tr>
        <tr>
          <td width="200">Nomor HP</td>
          <td width="10">:</td>
          <td> {props.getUserDetail.contact} </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
