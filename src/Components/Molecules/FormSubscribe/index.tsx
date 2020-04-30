import React from "react";
import "./style.scss";
import { Form, FormControl } from "react-bootstrap";
import SubscribeButton from "../../Atoms/Button";
const Index = () => {
    const owlClass = 'm-formSubscribe'
  return (
    <Form inline className  = {`${owlClass} rounded-pill`}>
      <FormControl
        type="text"
        placeholder="Enter your email"
        className= {`${owlClass}-input mr-sm-2 rounded-pill`}
        style = {{color:'white'}}
      />
      <SubscribeButton className="rounded-pill">Subscribe</SubscribeButton>
    </Form>
  );
};

export default Index;
