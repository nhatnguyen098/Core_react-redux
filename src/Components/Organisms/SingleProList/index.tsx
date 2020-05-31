import React from "react";
import "./style.scss";
import { Row, Col } from "react-bootstrap";
import ProImg from "../../Atoms/ProductImg";
import SingleProContent from "../../Molecules/BannerText";
import ProductOverlay from "../../../assets/product_overlay.png";
interface IProduct {
  id: number;
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
  onGoToDetail: (val: number) => void;
}
const Index: React.FC<ISinglePro> = ({ product, revere, onGoToDetail }) => {
  const owlClass = "o-singleProList";
  const { title, urlImg, price, id } = product;
  return (
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
              btnTitle="View Detail"
              btnColor="btn btn-outline-light"
              text={<h2>{title}</h2>}
              proId={id}
              onGoToDetail={(val) => onGoToDetail(val)}
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
              proId={id}
              onGoToDetail={(val) => onGoToDetail(val)}
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
  );
};

export default Index;
