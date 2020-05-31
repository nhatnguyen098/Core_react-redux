import React from "react";
import Header from "../Components/Organisms/Header";
import Footer from "../Components/Organisms/Footer";
import { Container } from "react-bootstrap";
interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  auth: boolean;
}
const layout: React.FC<LayoutProps> = ({children}): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Container fluid style = {{padding:'unset', marginTop:'80px', marginBottom: '80px'}}>{children}</Container>
      <Footer />
    </React.Fragment>
  );
};

export default layout;
