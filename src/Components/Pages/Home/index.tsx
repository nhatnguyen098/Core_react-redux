import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import BannerPart from "../../Organisms/BannerPart";
import SingleProduct from "../../Organisms/SingleProList";
import TrendingPart from "../../Organisms/TrendingList";
import "./style.scss";
import Carousel from "../../Molecules/CarouselHome";
import FeaturePart from "../../Organisms/FeaturePart";
import Loading from "../../Atoms/Loading";
interface IHomePage {
  productList: [];
  loading: boolean;
}
const Index: React.FC<IHomePage> = ({ productList, loading }) => {
  const owlClass = "HomePage"
  return (
    <React.Fragment>
      <BannerPart />

      <section
        style={{
          display: "block",
          width: "100%",
          paddingTop: "50px",
          paddingLeft: "300px",
          paddingRight:"300px"
        }}
      >
        {loading ? (
          <Loading />
        ) : productList.length > 0 ? (
          productList.slice(0, 3).map((item, i) => {
            return (
              <SingleProduct
                key={i}
                product={item}
                revere={(i + 1) % 2 !== 0 ? true : false}
              />
            );
          })
        ) : (
          "Nothing items in list"
        )}
      </section>

      <section>
        {loading ? (
          <Loading />
        ) : productList.slice(3, 9).length > 0 ? (
          <TrendingPart productArr={productList.slice(3, 9)} />
        ) : (
          "Nothing items in list"
        )}
      </section>

      <section>
        {loading ? (
          <Loading />
        ) : productList.slice(10, 14).length > 0 ? (
          productList.length > 0 && (
            <Carousel productArr={productList.slice(10, 15)} />
          )
        ) : (
          "Nothing items in list"
        )}
      </section>
      <FeaturePart />
    </React.Fragment>
  );
};

export default Index;
