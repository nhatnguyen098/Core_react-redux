import React from "react";
import { Form } from "react-bootstrap";
import "./style.scss";
import Button from "../../Atoms/Button";
interface ISearchForm {
  display: boolean;
}
const Index: React.FC<ISearchForm> = ({ display }) => {
  const owlClass = "m-searchForm";
  return (
    <React.Fragment>
      <Form className = {`${owlClass} ${display ? "checked" : "default"}`}>
        <Form.Control
          size="lg"
          className={`${display ? "checked" : "default"}`}
          type="text"
          placeholder="Search keywords"
        />
        <Button className={`${owlClass}-btn`}>x</Button>
      </Form>
    </React.Fragment>
  );
};

export default Index;
