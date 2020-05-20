import React, { useState, useEffect } from "react";
import ProductPage from "../../Components/Pages/ProductList";
import { fetching_proList,filterProPrice } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import {rangePriceArr} from '../../Constants/rangePrice'
interface IProductList {
  match: any;
  history: any;
}

const Index: React.FC<IProductList> = ({ match, history }) => {
  // console.log(match);
  // console.log(history);
  const { data, loading } = useSelector((state: any) => state.home.proList);
  const {filterPro} = useSelector((state:any) => state.home)
  console.log(filterPro)
  const [stateData,setStateData] = useState({
    keywords: "",
    priceData: filterPro.data,
    displayFormPrice: false
  })
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetching_proList());
  }, []);
  return (
    <ProductPage
      url={match.url}
      productArr={
        stateData.keywords !== ""
          ? data
              .slice(9, data.length)
              .filter((item: any) => item.title.toLowerCase().indexOf(stateData.keywords.toLowerCase()) !== -1)
          : data.slice(9, data.length)
      }
      loading={loading}
      onSearchKey={(key) => setStateData({...stateData,keywords: key})}
      displayFormPrice = {stateData.displayFormPrice}
      onChangeDisplay = {() => setStateData({...stateData,displayFormPrice: !stateData.displayFormPrice})}
      arrangePrice = {rangePriceArr}
      onFilterPrice = {(rangePrice:any) => dispatch(filterProPrice(rangePrice))}
    />
  );
};

export default Index;
