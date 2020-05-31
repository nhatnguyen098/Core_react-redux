import React from "react";
import Breadcrumb from "../../Molecules/Breadcrumbs";
import CardProduct from "../../Molecules/CardProduct";
import Loading from "../../Atoms/Loading";
import { AiOutlineSearch } from "react-icons/ai";
import { Row, Col, Container, Form, Button, Media } from "react-bootstrap";
import ButtonCard from "../../Atoms/Button";
import { IoIosArrowUp } from "react-icons/io";
import "./style.scss";
interface IProductList {
  url: string;
  productArr: any;
  loading: boolean;
  onSearchKey: (key: string) => void;
  displayFormPrice: boolean;
  onChangeDisplay: () => void;
  arrangePrice: any;
  onFilterPrice: (price:any) => void
}
const Index: React.FC<IProductList> = ({
  url,
  productArr,
  loading,
  onSearchKey,
  displayFormPrice,
  onChangeDisplay,
  arrangePrice,
  onFilterPrice
}) => {
  const owlClass = "p-productList";
  return (
    <div className={owlClass}>
      <div className={`${owlClass}-banner`}>
        <h1 style={{ color: "white", fontSize: "50px" }}>Product List</h1>
      </div>
      <Row className={`${owlClass}-content m-5`}>
        <Container fluid>
          {" "}
          <Breadcrumb url={url} />
        </Container>
        <Col className={`${owlClass}-content-col`} md={4}>
          <Form className={`${owlClass}-content-col-formSearch`}>
            <Form.Group className={`${owlClass}-content-col-formSearch-group`}>
              <Form.Control
                className={`${owlClass}-content-col-formSearch-group-text`}
                type="text"
                placeholder="Search"
                onChange={(event) => onSearchKey(event.target.value)}
              />
              <AiOutlineSearch
                size="1.5em"
                className={`${owlClass}-content-col-formSearch-group-icon`}
              />
            </Form.Group>
          </Form>
          <Button
            className={`${owlClass}-content-col-priceBtn`}
            onClick={() => onChangeDisplay()}
          >
            Price
            <span className={`${owlClass}-content-col-priceBtn-icon`}>
              <IoIosArrowUp className={`${displayFormPrice && "check"}`} />
            </span>
          </Button>
          <ul
            className={`${owlClass}-content-col-expand list-unstyled ${
              displayFormPrice && "showed"
            }`}
          >
            {arrangePrice.map((item: any, i: number) => {
              return (
                <Media as="li" key = {i}>
                  <Media.Body
                    style={{ cursor: "pointer" }}
                    onClick={() => onFilterPrice(item)}
                  >
                    <h6>${item.priceFrom}-${item.priceTo === -1 ? " Up to" : item.priceTo}</h6>
                  </Media.Body>
                </Media>
              );
            })}
          </ul>
        </Col>
        <Col md={8}>
          {loading ? (
            <Loading />
          ) : (
            <CardProduct
              productArr={productArr}
              chunkSize={2}
              parentUrlImg="product"
            />
          )}
          <div className="text-center">
            <ButtonCard>Load more</ButtonCard>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
