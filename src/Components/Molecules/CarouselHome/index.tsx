import React, {useState} from "react";
import { Carousel, ResponsiveEmbed } from "react-bootstrap";
import "./style.scss";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
const Index = ({ productArr }: { productArr: any }) => {
  const owlClass = "m-carousel";
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:any, e:any) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
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
            <div
              className={`${owlClass}-item-img`}
              style={{ width: "550px", height: "400px" }}
            >
              <ResponsiveEmbed aspectRatio="16by9">
                <embed src={item.urlVideo} />
              </ResponsiveEmbed>
            </div>
            <Carousel.Caption className={`${owlClass}-item-caption`}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Index;
