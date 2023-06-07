import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/">
          <Button variant="dark">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>{" "}
      </Col>
    </Row>
  );
};

export default BackComponent;
