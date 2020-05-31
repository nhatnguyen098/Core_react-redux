import fireBase from "../../Constants/fireBase";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const USER_LOGOUT = "USER_LOGOUT";

export const userLogin = (email: string, password: string) => {
  return (dispatch: any) => {
    dispatch(userLoginLoading());
    return fireBase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data: any) => dispatch(userLoginSuccess(data)))
      .catch((error: any) => dispatch(userLoginError(error)));
  };
};
export const userLoginLoading = () => {
  return {
    type: USER_LOGIN,
  };
};
export const userLoginSuccess = (data: any) => {
  console.log(data);
  return {
    type: USER_LOGIN_SUCCESS,
    data,
  };
};

export const userLoginError = (error: any) => {
  return {
    type: USER_LOGIN_ERROR,
    error,
  };
};
export const userLogOut = () => {
  return {
    type: USER_LOGOUT,
  };
};
