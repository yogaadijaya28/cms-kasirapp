import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dataTitle: state.users.brandTitle,
  };
};

const NavbarComponent = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{props.dataTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default connect(mapStateToProps, null)(NavbarComponent);
