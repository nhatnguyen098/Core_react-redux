import React from "react";
import "./style.scss";
import { MdShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
const Index = () => {
  const owlClass = "wrapperIcons";
  return (
    <div className={`${owlClass} d-flex`}>
      <a className = {`${owlClass}-icon`} onClick={() => console.log("here")}>
        <IoIosSearch size="1.5em" />
      </a>
      <a className = {`${owlClass}-icon`} onClick={() => console.log("here 2")}>
        <MdShoppingCart size="1.5em" />
      </a>
    </div>
  );
};

export default Index;
