import React, { ReactNode } from "react";
import "./style.scss";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
interface IFormText {
    btnTitle?: string;
    text?: any;
    children?: ReactNode;
    btnColor?: string;
}
const Index:React.FC<IFormText> = ({btnTitle,text,children,btnColor}) => {
  const owlClass = "m-bannerText";
  return (
    <div className={owlClass}>
      {children}
      <Text className="mb-3">
        {text}
      </Text>
      <Button className={btnColor}>{btnTitle}</Button>
    </div>
  );
};

export default Index;
