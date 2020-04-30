import React from "react";
import { Button } from "react-bootstrap";
import './style.scss'
interface IButton {
  className?: string;
}
const Index: React.FC<IButton> = ({ className, children }) => {
  const owlClass = "a-button";
  return (
    <Button onClick = {() => console.log('hello')} className={`${className} ${owlClass}`} size = "lg">{children}</Button>
  );
};

export default Index;
