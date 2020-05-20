import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./style.scss";
import ButtonCard from "../../Atoms/Button";
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
interface ICardProduct {
  productArr: IProduct[];
  chunkSize:number;
  parentUrlImg: string;
}
const Index: React.FC<ICardProduct> = ({ productArr,chunkSize,parentUrlImg }) => {
  const owlClass = "m-cardProduct";
  const renderCard = (arr: IProduct[],size:number) => {
    let xhtml = null;
    let newArr = [];
    let chunkSize = size;
    for (let i = 0; i < arr.length; i += chunkSize) {
      newArr.push(arr.slice(i, i + chunkSize));
    }
    xhtml =
      newArr.length > 0 &&
      newArr.map((arrList: IProduct[], i: number) => {
        return (
          <Row key={i} className={`${owlClass} mb-5`}>
            {arrList.map((item: IProduct, index: number) => {
              return (
                <Col className={`${owlClass}-col`} key={`index-${index}`}>
                  <Card style={{ width: "25rem" }}>
                    <Card.Img
                      variant="top"
                      src={`../../../assets/${parentUrlImg}/${item.urlImg}`}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>${item.price}</Card.Text>
                      <ButtonCard
                        className=""
                        proId={item.id}
                        onGoToDetail={(val: number) => console.log(val)}
                      >
                        Go To Detail
                      </ButtonCard>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        );
      });
    return xhtml;
  };
  return (
    <Row className="d-flex justify-content-center m-0">
      {renderCard(productArr,chunkSize)}
    </Row>
  );
};

export default Index;
