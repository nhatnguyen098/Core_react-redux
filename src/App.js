import React from "react";
import { AiFillUpCircle } from "react-icons/ai";
import { Provider } from "react-redux";
import ScrollToTop from "react-scroll-up";
import configStore from "./Redux/configStore";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import { NavbarMenu } from "./Constants/routes";
import Layout from './Commons/layout'
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
        return (
          <Route
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
      <Router>
        <Layout fluid className="App">
          <Switch>{mapRouteMenu(NavbarMenu)}</Switch>
          {scrollBtn()}
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
