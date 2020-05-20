import React from "react";
import "./style.scss";
import { Modal, Button } from "react-bootstrap";
interface IModal {
  show: boolean;
  onHide: any;
}
const Index: React.FC<IModal> = (props) => {
  const {onHide} = props
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Index;
