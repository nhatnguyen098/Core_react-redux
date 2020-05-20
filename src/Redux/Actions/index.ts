import { getProListAPI } from "../../Services/home";

export const FETCHING_PRODUCT_LIST = "FETCHING_PRODUCT_LIST";
export const FETCHING_PRODUCT_LIST_SUCCESS = "FETCHING_PRODUCT_LIST_SUCCESS";
export const FETCHING_PRODUCT_LIST_ERROR = "FETCHING_PRODUCT_LIST_ERROR";

export const FILTER_PRODUCT_PRICE = "FILTER_PRODUCT_PRICE"

export const fetching_proList = () => {
  return (dispatch: any) => {
    return getProListAPI()
      .then((res) => {
        dispatch(fetching_proList_success(res.data));
      })
      .catch((error) => {
        console.log(error)
        dispatch(fetching_proList_error(error));
      });
  };
};

export const fetching_proList_success = (data: any) => {
  return {
    type: FETCHING_PRODUCT_LIST_SUCCESS,
    data,
  };
};

export const fetching_proList_error = (error: any) => {
  return {
    type: FETCHING_PRODUCT_LIST_ERROR,
    error,
  };
};

export const filterProPrice = ({priceFrom,priceTo} : {priceFrom:number,priceTo:number}) => {
  console.log({priceFrom,priceTo})
  return {
    type: FILTER_PRODUCT_PRICE,
    rangePrice:{priceFrom,priceTo}
  }
}
