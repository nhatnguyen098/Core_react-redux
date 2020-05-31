import React from "react";
import LoginPage from "../../Components/Pages/Login";
// import fireBase from "../../Constants/fireBase";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../Redux/Actions/userInfo";
import { toast } from "react-toastify";
// import { Route, Redirect } from "react-router-dom";
// interface ILogin {
//   email: string;
//   password: string;
// }
const Index = ({ match, history }: { match: any; history: any }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state.user);
  React.useEffect(() => {
    if (error) {
      toast.warn(error);
    }
    if (data.token !== null) {
      history.push("/userProfile");
    }
  }, [data, error, history]);

  return (
    <LoginPage
      loading={loading}
      handleSubmit={(val) => dispatch(userLogin(val.email, val.password))}
    />
  );
};

export default Index;
