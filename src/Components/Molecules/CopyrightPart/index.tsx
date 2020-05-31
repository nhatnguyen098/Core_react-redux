import React from "react";
import Text from "../../Atoms/Text";
import "./style.scss";
import { Row, Col, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
const Index = () => {
  const owlClass = "m-copyRight";
  return (
    <Container fluid>
    <Row className={`${owlClass} d-flex`}>
      <Col>
        <Text className = "text-center">
          Copyright ©2020 All rights reserved | This template is made with by
          Color library
        </Text>
      </Col>
      <Col className = "d-flex justify-content-center">
        <Text className = "mr-5">
          <Link to = "/" className = "text-dark">Turns & Conditions </Link>
        </Text>
        <Text className = "mr-5">
          <Link to = "/" className = "text-dark">FAQ </Link>
        </Text>
      </Col>
    </Row>
    </Container>
  );
};

export default Index;
