import {
  FETCHING_PRODUCT_LIST,
  FETCHING_PRODUCT_LIST_SUCCESS,
  FETCHING_PRODUCT_LIST_ERROR,
  FILTER_PRODUCT_PRICE,
} from "../../Actions";
interface IStateData {
  id: string;
  urlImg: string;
  urlVideo: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
}
const initState = {
  proList: {
    data: [],
    loading: true,
    error: null,
  },
  filterPro: {
    data: [],
    loading: true,
    error: null,
  },
};
export default (state = initState, action: any) => {
  switch (action.type) {
    case FETCHING_PRODUCT_LIST:
      return { ...state, proList: { ...state.proList, loading: true } };
    case FETCHING_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        proList: { ...state.proList, data: action.data, loading: false },
      };
    case FETCHING_PRODUCT_LIST_ERROR:
      return {
        ...state,
        proList: { ...state.proList, data: [], loading: true },
      };
    case FILTER_PRODUCT_PRICE:
      let { priceFrom, priceTo } = action.rangePrice;
      console.log(priceFrom)
      console.log(action.type)
      return {
        ...state,
        filterPro: {
          ...state.filterPro,
          data: state.proList.data.filter(
            (item: IStateData) =>
              item.price >= priceFrom && item.price < priceTo
          ),
          loading:false
        },
      };
    default:
      return state;
  }
};
