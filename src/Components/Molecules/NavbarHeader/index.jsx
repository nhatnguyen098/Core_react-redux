import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./style.scss";
import { NavbarMenu } from "../../../Constants";
const Index = () => {
  const owlClass = "navWrapper";
  const [showDropDown, setShowDropDown] = useState(-1);
  const renderNavbar = (navArr) => {
    let xhtml = null;
    xhtml = (
      <Nav className={`${owlClass}-nav mr-auto`}>
        {navArr &&
          navArr.map((item) => {
            var status = showDropDown === item.id ? true : false
            return item.children.length > 0 ? (
              <NavDropdown
                key={item.id}
                title={item.title}
                className={`${owlClass}-nav-drop ml-3 mr-3`}
                size="16px"
                onMouseOver={() => setShowDropDown(item.id)}
                onMouseOut={() => setShowDropDown(-1)}
                active = {status}
                show = {status}
              >
                {item.children.map((child) => {
                  return (
                    <NavDropdown.Item
                      className={`${owlClass}-nav-drop-item`}
                      key={child.childId}
                      onClick = {() => console.log(item)}
                    >
                      {child.childTitle}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            ) : (
              <Nav.Link
                key={item.id}
                href="#"
                className={`${owlClass}-nav-drop ml-3 mr-3`}
                size="16px"
              >
                {item.title}
              </Nav.Link>
            );
          })}
      </Nav>
    );
    return xhtml;
  };
  return (
    <Navbar expand="lg" className={`${owlClass}`}>
      {renderNavbar(NavbarMenu)}
    </Navbar>
  );
};

export default Index;
