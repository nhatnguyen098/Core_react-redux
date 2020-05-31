import React, { ReactNode } from "react";
import "./style.scss";
import { Button } from "react-bootstrap";

const Index = ({ children, className }: { children: ReactNode, className: string }) => {
  const owlClass = "a-bntIcon";
  return <Button className={`${owlClass} ${className} rounded-circle`}>{children}</Button>;
};

export default Index;
