import { USER_LOGIN,USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, userLogin,userLoginSuccess, userLoginError } from './../../Actions/userInfo';
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
            console.log(action.data)
            const {email,xa} = action.data.user
            return {...state, data: {...state.data, email: email, token:xa},loading:false}
        case USER_LOGIN_ERROR:
            return {...state,data: {...state.data,email:null,token:null}, loading: false, error: action.error.message}
        default: return {...state}
    }
}