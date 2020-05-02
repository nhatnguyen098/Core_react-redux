import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomePage from "../../Components/Pages/Home";
import { fetching_proList } from "../../Redux/Actions";
import {useSelector,useDispatch} from 'react-redux'
// interface IHomeObj {
//   data: [];
//   loading: boolean;
//   error: any;
// }
// interface IHomePage {
//   homeData: IHomeObj;
//   dispatchFetchingPro: () => void;
// }
const Index = () => {
  const { data, loading } = useSelector((state:any) => state.home.proList);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetching_proList())
    // dispatchFetchingPro();
  }, []);
  return <HomePage productList={data} loading={loading} />;
};
// const mapStateToProps = (state: any) => {
//   return {
//     homeData: state.home.proList,
//   };
// };
// const dispatchActionToReducer = (dispatch: any) => {
//   return {
//     dispatchFetchingPro: () => {
//       dispatch(fetching_proList());
//     },
//   };
// };
// export default connect(mapStateToProps, dispatchActionToReducer)(Index);
export default Index;
