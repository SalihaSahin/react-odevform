import React, { useRef, useState, useEffect } from "react";
import ListTable from "./ListTable";
import { Form, Button, Row, Col } from "react-bootstrap";

function FormTable() {
  const firstnameInput = useRef();
  const lastnameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const [values, setValues] = useState([]);

  useEffect(() => {}, [values]);
  const [id, setId] = useState(-1);

  function clickSubmit(event) {
    event.preventDefault();
    const firstname = firstnameInput.current.value;
    const lastname = lastnameInput.current.value;
    const email = emailInput.current.value;
    const message = messageInput.current.value;

    setValues([
      ...values,
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message
      }
    ]);
    firstnameInput.current.value = "";
    lastnameInput.current.value = "";
    emailInput.current.value = "";
    messageInput.current.value = "";
  }

  function deleteButton(id) {
    values.splice(id, 1);
    setValues([...values]);
  }

  function editButton(object) {
    setId(object.id);
    firstnameInput.current.value = object.firstname;
    lastnameInput.current.value = object.lastname;
    emailInput.current.value = object.email;
    messageInput.current.value = object.message;
  }
  function editForm(event) {
    event.preventDefault();
    const firstname = firstnameInput.current.value;
    const lastname = lastnameInput.current.value;
    const email = emailInput.current.value;
    const message = messageInput.current.value;
    let newArr = [...values];
    newArr[id] = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: message
    };
    setValues(newArr);
    setId(-1);
    firstnameInput.current.value = "";
    lastnameInput.current.value = "";
    emailInput.current.value = "";
    messageInput.current.value = "";
  }

  return (
    <div>
      <Form
        className="bg-secondary p-5 text-light rounded"
        onSubmit={id > -1 ? editForm : clickSubmit}
      >
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter FirstName"
                ref={firstnameInput}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter LastName"
                ref={lastnameInput}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailInput}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} ref={messageInput} />
        </Form.Group>

        <Button variant={id > -1 ? "success" : "info"} type="submit">
          {id > -1 ? "Edit" : "Submit"}
        </Button>
      </Form>
      <ListTable
        values={values}
        deleteButton={deleteButton}
        editButton={editButton}
      />
    </div>
  );
}

export default FormTable;
