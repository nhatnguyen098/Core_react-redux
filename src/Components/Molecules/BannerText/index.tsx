import React, { ReactNode } from "react";
import "./style.scss";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
interface IFormText {
  btnTitle?: string;
  text?: any;
  children?: ReactNode;
  btnColor?: string;
  proId?: number;
  onGoToDetail?: (val: number) => void;
}
const Index: React.FC<IFormText> = ({
  btnTitle,
  text,
  children,
  btnColor,
  proId,
  onGoToDetail,
}) => {
  const owlClass = "m-bannerText";
  return (
    <div className={owlClass}>
      {children}
      <Text className="mb-3">{text}</Text>
      <Button
        className={btnColor}
        proId={proId}
        onGoToDetail={(val) => onGoToDetail !== undefined && onGoToDetail(val)}
      >
        {btnTitle}
      </Button>
    </div>
  );
};

export default Index;
