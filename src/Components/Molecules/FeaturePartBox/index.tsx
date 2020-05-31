import React from "react";
import { Row, Col } from "react-bootstrap";
import Text from "../../Atoms/Text";
import { TiCreditCard } from "react-icons/ti";
import { FaCcAmazonPay } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { BsGift } from "react-icons/bs";
const Index = () => {
  return (
    <Row className = "mt-5">
      <Col
        className="text-center p-5 mr-4"
        style={{ border: "1px solid #E4D3DF" }}
      >
        <TiCreditCard size="3em" />
        <Text className = "mt-3">Credit Card Support</Text>
      </Col>
      <Col
        className="text-center p-5 mr-4"
        style={{ border: "1px solid #E4D3DF" }}
      >
        <FaCcAmazonPay size="3em" />
        <Text className = "mt-3">Online Order</Text>
      </Col>
      <Col
        className="text-center p-5 mr-4"
        style={{ border: "1px solid #E4D3DF" }}
      >
        <GrDeliver size="3em" />
        <Text className = "mt-3">Free Delivery</Text>
      </Col>
      <Col
        className="text-center p-5 mr-4"
        style={{ border: "1px solid #E4D3DF" }}
      >
        <BsGift size="3em" />
        <Text className = "mt-3">Product with Gift</Text>
      </Col>
    </Row>
  );
};

export default Index;
