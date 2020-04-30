import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "./style.scss";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
const Index = ({ productArr }: { productArr: any }) => {
  const owlClass = "m-carousel";
  return (
    <Carousel
      className={owlClass}
      prevIcon={<FiArrowLeftCircle size="2.5em" color="#795376" />}
      nextIcon={<FiArrowRightCircle size="2.5em" color="#795376" />}
    >
      {productArr.map((item: any, i: number) => {
        return (
          <Carousel.Item
            key={`index-${i}`}
            className={`${owlClass}-item text-center`}
          >
            <Image className={`${owlClass}-item-img`} src={item.urlProImg} />

            <Carousel.Caption className={`${owlClass}-item-caption`}>
              <h3>{item.content}</h3>
              <p>${item.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Index;
