import React from "react";
import fireBase from '../Constants/fireBase';
import {useSelector} from 'react-redux'

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const user = useSelector(state => state.user.data)
  React.useEffect(() => {
    setCurrentUser(user)
    fireBase.auth().onAuthStateChanged(setCurrentUser);
  }, [user]);
  return (
    <React.Fragment value={{ currentUser }}>
      {children}
    </React.Fragment>
  );
};