import React from "react";
import "./style.scss";
import { Row, Col, Image } from "react-bootstrap";
import BannerText from "../../Molecules/BannerText";
import BannerImg from "../../../assets/banner.png";
const Index = () => {
  const owlClass = "o-bannerPart";
  return (
    <Row className={`${owlClass} p-0 m-0`}>
      <Col md={2} className="d-flex align-items-end p-0">
        <section
          style={{
            backgroundColor: "#B08EAD",
            height: "618px",
            width: "196px",
          }}
        ></section>
      </Col>
      <Col md={3} className="d-flex align-items-center pt-5">
        <BannerText
          btnColor="btn btn-outline-white"
          btnTitle="Show more"
          text="Seamlessly empower fully researched growth strategies and interoperable internal"
        >
          <h1 className={`${owlClass}-title mb-3`}>Best quality pillow</h1>
        </BannerText>
      </Col>
      <Col className={`${owlClass}-col p-0 text-right`} md={7}>
        <Image src={BannerImg} className={`${owlClass}-col-img`} />
      </Col>
    </Row>
  );
};

export default Index;
