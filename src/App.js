import React from 'react';
import HomePage from './Components/Pages/Home'
import ScrollToTop from "react-scroll-up";
import { AiFillUpCircle } from "react-icons/ai";
const App = () => {
  return (
    <div className="App">
      <HomePage/>
      <ScrollToTop showUnder={0} duration={700}>
                <AiFillUpCircle
                    className="icon-nav"
                    color="#4B3049"
                    size="38px"
                    style={{ margin: "0 5px" }}
                />
            </ScrollToTop>
    </div>
  );
}

export default App;
