import React, { ReactNode } from "react";
import "./style.scss";
import { Row, Col, Container } from "react-bootstrap";
import ProImg from "../../Atoms/ProductImg";
import SingleProContent from "../../Molecules/BannerText";
import ProductOverlay from "../../../assets/product_overlay.png";
interface IProduct {
  id:string;
  urlImg?: string;
  urlVideo?: string;
  title?: string;
  description?: string;
  price?: number;
  quantity?: number;
  createAt?: Date;
}
interface ISinglePro {
  product: IProduct;
  revere: boolean;
}
const Index: React.FC<ISinglePro> = ({ product, revere }) => {
  const owlClass = "o-singleProList";
  const { title,description,urlImg,price,quantity} = product;
  return (
    // <Container className={owlClass}>
      <Row className={`${owlClass} m-0`}>
        {revere ? (
          <React.Fragment>
            <Col md={{ order: 1 }}>
              <ProImg productOverlay={ProductOverlay} productImg={urlImg} />
            </Col>
            <Col
              md={{ span: 5, offset: 3, order: 2 }}
              className="d-flex justify-content-center align-items-center"
            >
              <SingleProContent
                btnTitle="Explore more"
                btnColor="btn btn-outline-light"
                text={<h2>{title}</h2>}
              >
                <h5>Started from ${price}</h5>
              </SingleProContent>
            </Col>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Col
              md={{ span: 6, offset: 0, order: 1 }}
              className="d-flex justify-content-center align-items-center"
            >
              <SingleProContent
                btnTitle="Explore more"
                btnColor="btn btn-outline-light"
                text={<h2>{title}</h2>}
              >
                <h5>Started from ${price}</h5>
              </SingleProContent>
            </Col>
            <Col md={{ order: 2 }}>
              <ProImg productOverlay={ProductOverlay} productImg={urlImg} />
            </Col>
          </React.Fragment>
        )}
      </Row>
    // </Container>
  );
};

export default Index;
