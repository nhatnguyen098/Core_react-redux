import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../Organisms/Header";
import Footer from "../../Organisms/Footer";
import BannerPart from "../../Organisms/BannerPart";
import SingleProduct from "../../Organisms/SingleProList";
import TrendingPart from '../../Organisms/TrendingList'
import "./style.scss";
import {ProductArr} from '../../../Constants'
import Carousel from '../../Molecules/CarouselHome'
import FeaturePart from '../../Organisms/FeaturePart'
import Loading from '../../Atoms/Loading'
const Index = () => {
  return (
    <Container fluid className="HomePage mt-3 mb-3 p-0">
      <Header />
      <section style={{ marginTop: "80px", marginBottom: '80px' }}>
        <BannerPart />
        {ProductArr.slice(0,3).map((item, i) => {
          return (
            <SingleProduct
              key={i}
              product={item}
              revere={(i + 1) % 2 !== 0 ? true : false}
            />
          );
        })}
        <TrendingPart productArr = {ProductArr}/>
        <Carousel productArr = {ProductArr.slice(0,6)}/>
        <FeaturePart/>
      </section>
      <Loading/>
      <Footer />
    </Container>
  );
};

export default Index;
