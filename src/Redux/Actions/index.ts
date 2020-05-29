import { getProListAPI, getProDetailAPI } from "../../Services/home";

export const FETCHING_PRODUCT_LIST = "FETCHING_PRODUCT_LIST";
export const FETCHING_PRODUCT_LIST_SUCCESS = "FETCHING_PRODUCT_LIST_SUCCESS";
export const FETCHING_PRODUCT_LIST_ERROR = "FETCHING_PRODUCT_LIST_ERROR";

export const FILTER_PRODUCT_PRICE = "FILTER_PRODUCT_PRICE";

export const FETCHING_PRODUCT_BY_ID = "FETCHING_PRODUCT_BY_ID";
export const FETCHING_PRODUCT_BY_ID_SUCCESS = "FETCHING_PRODUCT_BY_ID_SUCCESS";
export const FETCHING_PRODUCT_BY_ID_ERROR = "FETCHING_PRODUCT_BY_ID_ERROR";

export const fetching_proList = () => {
  return (dispatch: any) => {
    return getProListAPI()
      .then((res) => {
        dispatch(fetching_proList_success(res.data));
      })
      .catch((error) => {
        console.log(error);
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

export const filterProPrice = ({
  priceFrom,
  priceTo,
}: {
  priceFrom: number;
  priceTo: number;
}) => {
  return {
    type: FILTER_PRODUCT_PRICE,
    rangePrice: { priceFrom, priceTo },
  };
};

export const fetching_pro_by_id = (id: number) => {
  return (dispatch: any) => {
    return getProDetailAPI(id)
      .then((res) => dispatch(fetching_pro_by_id_success(res.data)))
      .catch((error) => dispatch(fetching_pro_by_id_error(error)));
  };
};
export const fetching_pro_by_id_success = (data: any) => {
  return {
    type: FETCHING_PRODUCT_BY_ID_SUCCESS,
    data,
  };
};
export const fetching_pro_by_id_error = (error: any) => {
  return {
    type: FETCHING_PRODUCT_BY_ID_ERROR,
    error,
  };
};
