import {
  faEdit,
  faInfo,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Row, Col, Spinner } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
    // headerStyle: () =>{
    //     return {width:"10%"}
    // }
  },
  {
    dataField: "domicile",
    text: "Domicile",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "age",
    text: "Age",
    sort: true,
    headerStyle: () => {
      return { width: "6%" };
    },
  },
  {
    dataField: "contact",
    text: "Contact",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button variant="dark" className="mr-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>{" "}
          <Link to={"edit/" + row.id}>
            <Button variant="dark" className="mr-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>{" "}
          <Button variant="dark" className="mr-2">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>{" "}
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const TableComponent = (props) => {
  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button variant="dark" className="mr-2">
                      <FontAwesomeIcon icon={faUserPlus} /> Create User
                    </Button>
                  </Link>{" "}
                </Col>

                <Col>
                  <div className="float-end">
                    <SearchBar
                      {...props.searchProps}
                      placeholder="Search ..."
                      style={{ marginBottom: "10px" }}
                    />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorUsersList ? (
            <h4> {props.errorUsersList} </h4>
          ) : (
            <Spinner animation="grow" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
