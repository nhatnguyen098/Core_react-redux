import React from "react";
import { Row } from "react-bootstrap";
import HeaderNavbar from "../../Molecules/NavbarHeader";
import HeaderIcons from "../../Molecules/IconsHeader";
import Logo from "../../Atoms/Logo";
import "./style.scss";
const Index = () => {
  const owlClass = "wrapperHeader";
  return (
    <Row className={`${owlClass}`}>
      <Logo />
      <HeaderNavbar />
      <HeaderIcons />
    </Row>
  );
};

export default Index;
