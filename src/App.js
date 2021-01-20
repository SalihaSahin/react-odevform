import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormTable from "./components/FormTable";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="mt-5">
      <FormTable />
    </Container>
  );
}
export default App;
