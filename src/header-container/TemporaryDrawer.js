import React from "react";
import Modal from "react-bootstrap/Modal";

export default function TemporaryDrawe(props) {
  const {bodyData, bodyHeader} = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {bodyHeader}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
         {bodyData}
        </p>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
