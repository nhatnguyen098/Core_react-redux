import React from "react";
// import { AuthContent } from "./authentication";
import { Route, Redirect } from "react-router-dom";
import {useSelector} from 'react-redux'
const PrivateRoute = ({ component: RouteComponent, ...rest }: {component:any}) => {
  const { data } = useSelector((state:any) => state.user);
  console.log(data)
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!data.token ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
