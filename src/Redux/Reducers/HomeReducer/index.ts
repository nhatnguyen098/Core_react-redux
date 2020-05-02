import {FETCHING_PRODUCT_LIST,FETCHING_PRODUCT_LIST_SUCCESS,FETCHING_PRODUCT_LIST_ERROR} from '../../Actions'
const initState = {
    proList: {
        data: [],
        loading:true,
        error:null
    }
}
export default (state = initState,action : any) => {
    switch(action.type){
        case FETCHING_PRODUCT_LIST:
            return {...state,proList: {...state.proList, loading:true}};
        case FETCHING_PRODUCT_LIST_SUCCESS:
            return {...state,proList:{...state.proList,data:action.data,loading:false}}
        case FETCHING_PRODUCT_LIST_ERROR: 
            console.log(action.error)
            return {...state,proList: {...state.proList,data:[],loading:true}}
        default:
            return state
    }
}