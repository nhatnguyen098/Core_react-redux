import React, { useState, useEffect } from "react";
import "./style.scss";
import { MdShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import ModalSignUp from '../ModalUser'
interface IHeaderIcons {
  showSearchForm: (val: boolean) => void;
  showSignUp: boolean
  changeDisplayModal: (val:boolean) => void
}
const Index: React.FC<IHeaderIcons> = ({ showSearchForm,showSignUp,changeDisplayModal }) => {
  const owlClass = "wrapperIcons";
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    showSearchForm(show);
  }, [show]);
  return (
    <div className={`${owlClass} d-flex`}>
      <a className={`${owlClass}-icon`} onClick={() => setShow(!show)}>
        <IoIosSearch size="1.5em" />
      </a>
      <a className={`${owlClass}-icon`} onClick={() => console.log("here 2")}>
        <MdShoppingCart size="1.5em" />
      </a>
      <a className={`${owlClass}-icon`} onClick={() => changeDisplayModal(true)}>
        <FaRegUserCircle size="1.5em" />
        {/* <ModalSignUp show = {showSignUp} onHide={() => changeDisplayModal(false)}/> */}
      </a>
    </div>
  );
};

export default Index;
