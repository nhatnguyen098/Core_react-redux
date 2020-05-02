import React from "react";
import Header from "../Components/Organisms/Header";
import Footer from "../Components/Organisms/Footer";
import { Container } from "react-bootstrap";
import { AiFillUpCircle } from "react-icons/ai";
interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  auth: boolean;
}
const layout: React.FC<LayoutProps> = (props): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Container fluid style = {{padding:'unset', marginTop:'80px'}}>{props.children}</Container>
      <Footer />
    </React.Fragment>
  );
};

export default layout;
