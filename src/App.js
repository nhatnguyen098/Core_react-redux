import React from "react";
import { AiFillUpCircle } from "react-icons/ai";
import { Provider } from "react-redux";
import ScrollToTop from "react-scroll-up";
import configStore from "./Redux/configStore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavbarMenu } from "./Constants/routes";
import Layout from "./Commons/layout";
import PrivateRoute from "./Commons/privateRoute";
import { AuthProvider } from "./Commons/authentication";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const store = configStore();
const App = () => {
  const scrollBtn = () => {
    return (
      <ScrollToTop showUnder={0} duration={700}>
        <AiFillUpCircle
          className="icon-nav"
          color="#4B3049"
          size="38px"
          style={{ margin: "0 5px" }}
        />
      </ScrollToTop>
    );
  };
  const mapRouteMenu = (val) => {
    var rs = null;
    if (val.length > 0) {
      rs = val.map((item, index) => {
        return item.path !== "/userProfile" ? (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.main}
          />
        ) : (
          <PrivateRoute
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.main}
          />
        );
      });
    }
    return rs;
  };
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Layout fluid className="App">
            <Switch>{mapRouteMenu(NavbarMenu)}</Switch>
            {scrollBtn()}
            <ToastContainer position={toast.POSITION.TOP_RIGHT} />
          </Layout>
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
