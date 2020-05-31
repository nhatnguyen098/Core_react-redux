import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./style.scss";
import { NavbarMenu } from "../../../Constants/routes";
import { Route, Link } from "react-router-dom";
interface INavMenu {
  id: any;
  label: string;
  path: string;
  activeOnlyWhenExact: boolean;
  children: any;
}
const Index = () => {
  const owlClass = "navWrapper";
  const [showDropDown, setShowDropDown] = useState(-1);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const RenderNavItem = ({
    menuItem,
    className,
  }: {
    menuItem: INavMenu;
    className: string;
  }) => {
    let xhtml = null;
    let { id, label, path, children } = menuItem;
    let status = showDropDown === id ? true : false;
    xhtml =
      children.length > 0 ? (
        <NavDropdown
          id="nav-dropdown"
          title={label}
          className={`${owlClass}-nav-drop ml-3 mr-3 ${className}`}
          size="16px"
          onMouseOver={() => setShowDropDown(id)}
          onMouseOut={() => setShowDropDown(-1)}
          active={status}
          show={status}
        >
          {children.map((child: any, index: number) => {
            return (
              <Link
                className={`${owlClass}-nav-drop-item nav-link`}
                key={index}
                onClick={() => scrollTop()}
                to={child.path}
              >
                {child.childLabel}
                <span className="sr-only">(current)</span>
              </Link>
            );
          })}
        </NavDropdown>
      ) : (
        <Link
          key={id}
          className={`${owlClass}-nav-drop ml-3 mr-3 nav-link ${className}`}
          onClick = {() => scrollTop()}
          to={path}
        >
          {label}
          <span className="sr-only">(current)</span>
        </Link>
      );

    return xhtml;
  };
  const mapContentRoutes = (navArr: any) => {
    let xhtml = null;
    if (navArr.length > 0) {
      xhtml = navArr.map((item: any, index: number) => (
        <Route
          key={index}
          path={item.path}
          exact={item.activeOnlyWhenExact}
          children={({ match }: { match: any }) => (
            <RenderNavItem
              key={index}
              menuItem={item}
              className={match === item.id ? "active" : ""}
            />
          )}
        />
      ));
    }
    return xhtml;
  };
  return (
    <Navbar expand="lg" className={`${owlClass}`}>
      <Nav className={`${owlClass}-nav mr-auto`}>
        {mapContentRoutes(NavbarMenu)}
      </Nav>
    </Navbar>
  );
};

export default Index;
