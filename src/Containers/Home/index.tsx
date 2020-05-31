import React, { useEffect } from "react";
import HomePage from "../../Components/Pages/Home";
import { fetching_proList } from "../../Redux/Actions";
import {useSelector,useDispatch} from 'react-redux'
import { useHistory,useRouteMatch } from "react-router-dom";
const Index = () => {
  const { data, loading } = useSelector((state:any) => state.home.proList);
  let history = useHistory();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetching_proList())
  }, []);
  const getProductId = (id:number) => {
    history.push(`/product/${id}`);
  }
  return <HomePage productList={data} loading={loading} onGoToDetail = {(val:number) => getProductId(val)}/>;
};
export default Index;
