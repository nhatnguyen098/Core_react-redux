import React, { useState, useEffect } from "react";
import "./style.scss";
import { MdShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import ModalSignUp from "../ModalUser";
import PopoverUser from "../PopoverUserIcon";
import { OverlayTrigger, Popover, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GrLogin } from "react-icons/gr";
import { FaSignOutAlt } from "react-icons/fa";
import {AiOutlineProfile} from 'react-icons/ai'
import {FiUserPlus} from 'react-icons/fi'

interface IHeaderIcons {
  showSearchForm: (val: boolean) => void;
  token: any;
  onLogOut: () => void;
}
const Index: React.FC<IHeaderIcons> = ({ showSearchForm, token, onLogOut }) => {
  const owlClass = "wrapperIcons";
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    showSearchForm(show);
  }, [show]);
  const userPopoverContent = () => {
    let html = null;
    if (token) {
      html = (
        <section className="text-start d-block mt-3 p-1">
          <p className="text-center font-weight-bold">Welcome Pillow-Mart</p>
          <Link className="text-dark" to="/userProfile">
            <AiOutlineProfile/>
            User profile</Link>
          <br />
          <Link className="text-dark" onClick={onLogOut} to="/">
          <FaSignOutAlt size="2em" className="pr-2" />
            LogOut
          </Link>
        </section>
      );
    } else {
      html = (
        <section className="text-start d-block mt-3 p-1">
          <Link className="text-dark" to="/login">
            <GrLogin size="2em" className="pr-2" />
            LogIn
          </Link>
          <br />
          <Link className="text-dark" to="/register">
            <FiUserPlus size="2em" className="pr-2" />
            Register
          </Link>
        </section>
      );
    }
    return html;
  };
  return (
    <div className={`${owlClass} d-flex`}>
      <a className={`${owlClass}-icon`} onClick={() => setShow(!show)}>
        <IoIosSearch size="1.5em" />
      </a>
      <a className={`${owlClass}-icon`} onClick={() => console.log("here 2")}>
        <MdShoppingCart size="1.5em" />
      </a>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Content>
              <Tabs defaultActiveKey="user" id="uncontrolled-tab-example">
                <Tab eventKey="user" title="User">
                  {userPopoverContent()}
                  {/* <Link to="/login">Login page</Link>
                  <Link to="/userProfile">User profile</Link> */}
                </Tab>
                <Tab eventKey="favorite" title="Favorite">
                  zxc
                </Tab>
              </Tabs>
            </Popover.Content>
          </Popover>
        }
      >
        <a className={`${owlClass}-icon`}>
          <FaRegUserCircle size="1.5em" />
        </a>
      </OverlayTrigger>
    </div>
  );
};

export default Index;
