import React from "react";
import FormSubscribe from "../FormSubscribe";
import TitleSubscribeButton from "../../Atoms/Text";
import "./style.scss";
import { Row, Col,Container } from "react-bootstrap";
const Index = () => {
  const owlClass = "m-subscribePart";
  return (
    <Container fluid className={owlClass}>
      <Row className={`${owlClass}-wrapper`}>
        <Col md={12} className={`${owlClass}-wrapper-title`}>
          <TitleSubscribeButton color="white">
            Get promotions & updates!
          </TitleSubscribeButton>
        </Col>
        <Col md={12} className={`${owlClass}-wrapper-text`}>
          <TitleSubscribeButton color="white">
            Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources credibly innovate
            granular internal .
          </TitleSubscribeButton>
        </Col>
        <Col md={12} className={`${owlClass}-wrapper-form`}>
          <FormSubscribe btnTitle = "Subscribe"/>
        </Col>
      </Row>
    </Container >
  );
};

export default Index;
