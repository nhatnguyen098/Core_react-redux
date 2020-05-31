import React from "react";
import { Button } from "react-bootstrap";
import './style.scss'
interface IButton {
  className?: string;
  onGoToDetail?: (proId:number) => void
  proId?: number
}
const Index: React.FC<IButton> = ({ className, children,onGoToDetail,proId }) => {
  const owlClass = "a-button";
  return (
    <Button onClick = {() => onGoToDetail !== undefined && proId !== undefined && onGoToDetail(proId)} className={`${className} ${owlClass}`} size = "lg">{children}</Button>
  );
};

export default Index;
