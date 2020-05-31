import { USER_LOGIN,USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_LOGOUT } from './../../Actions/userInfo';
import ToastHelper from '../../../Helper/ToastHelper'
interface IUser {
    email: string;
    password:string;
}
const initState = {
    data : {
        email: null,
        token:null,
    },
    loading: true,
    error: null
}
export default (state = initState, action:any) => {
    switch(action.type) {
        case USER_LOGIN:
            return {...state, loading:true}
        case USER_LOGIN_SUCCESS:
            const {email,xa} = action.data.user
            return {...state, data: {...state.data, email: email, token:xa},loading:false, error: null}
        case USER_LOGIN_ERROR:
            ToastHelper(action.error.message)
            return {...state,data: {...state.data,email:null,token:null}, loading: false, error: action.error.message}
        case USER_LOGOUT:
            return {...state,data: {...state.data,email:null,token:null}}
        default: return {...state}
    }
}