import React from "react";
import SubscribePart from "../../Molecules/SubscribePart";
import FooterInner from "../../Molecules/FooterInner";
import CopyRightPart from "../../Molecules/CopyrightPart";
import { Container } from "react-bootstrap";
import './style.scss'
const Index = () => {
  const owlClass = "o-footer";
  return (
    <Container fluid className={owlClass}>
      <SubscribePart />
      <FooterInner />
      <CopyRightPart />
    </Container>
  );
};

export default Index;
