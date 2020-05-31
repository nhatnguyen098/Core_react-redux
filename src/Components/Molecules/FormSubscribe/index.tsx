import React from "react";
import "./style.scss";
import { Form, FormControl } from "react-bootstrap";
import SubscribeButton from "../../Atoms/Button";
interface IForm {
  btnTitle: any;

}
const Index:React.FC<IForm> = ({btnTitle}) => {
  const owlClass = "m-formSubscribe";
  return (
    <Form inline className={`${owlClass} rounded-pill`}>
      <FormControl
        type="text"
        placeholder="Enter your email"
        className={`${owlClass}-input mr-sm-2 rounded-pill`}
      />
      <SubscribeButton className="rounded-pill">{btnTitle}</SubscribeButton>
    </Form>
  );
};

export default Index;
