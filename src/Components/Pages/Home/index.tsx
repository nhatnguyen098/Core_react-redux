import React from "react";
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
  onGoToDetail: (val: number) => void;
}
const Index: React.FC<IHomePage> = ({ productList, loading, onGoToDetail }) => {
  // const owlClass = "HomePage";
  return (
    <React.Fragment>
      {/* Banner Part  */}
      <BannerPart />
      {/* End Banner Part  */}

      {/* Product List */}
      <section
        style={{
          display: "block",
          width: "100%",
          paddingTop: "150px",
          paddingLeft: "300px",
          paddingRight: "300px",
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
                onGoToDetail={(val) => onGoToDetail(val)}
              />
            );
          })
        ) : (
          <h3>Nothing items in list</h3>
        )}
      </section>
      {/* End product list */}

      {/* Trending product */}
      {loading ? (
        <Loading />
      ) : productList.slice(3, 9).length > 0 ? (
        <TrendingPart productArr={productList.slice(3, 9)} />
      ) : (
        <h3>Nothing items in list</h3>
      )}
      {/* End trending product */}

      {/* Carousel */}
      {loading ? (
        <Loading />
      ) : productList.slice(10, 14).length > 0 ? (
        productList.length > 0 && (
          <React.Fragment>
            <Carousel productArr={productList.slice(10, 15)} />
          </React.Fragment>
        )
      ) : (
        <h3>Nothing items in list</h3>
      )}
      {/* End carousel */}
      <FeaturePart />
    </React.Fragment>
  );
};

export default Index;
