import React from "react";
import { Button, Card, Accordion, Button } from "reactstrap";
function ListTable(props) {
  return (
    <div>
      {props.values.map((item, index) => {
        return (
          <div>
            <Card className="border-0 mt-3">
              <p>
                <strong>FirstName:</strong>
                {item.firstname}
              </p>
              <p>
                <strong>LasttName:</strong>
                {item.lastname}
              </p>
              <p>
                <strong>Email:</strong>
                {item.email}
              </p>
              <p>
                <strong>Message:</strong>
                {item.message}
              </p>

              <Button
                type="submit"
                className="btn btn-danger w-25"
                onClick={() => props.deleteButton(index)}
              >
                Remove
              </Button>
              <Button
                type="submit"
                className="btn btn-success w-25"
                onClick={() =>
                  props.editButton({
                    id: index,
                    firstname: item.firstname,
                    lastname: item.lastname,
                    email: item.email,
                    mesaage: item.message
                  })
                }
              >
                Edit
              </Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default ListTable;
