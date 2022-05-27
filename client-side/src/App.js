import "./App.css";
import React from "react";
import axios from "axios";
import {
  Button,
  Container,
  Card,
  Row,
  Col,
  Navbar,
  ListGroup,
} from "react-bootstrap";
import { PiCard } from "./PiCard";
import { SunCard } from "./SunCard";

function App() {
  let navbar = (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          Naluri Coding Challenge - Pi and Sun Circumference Calculator
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );

  return (
    <div className="App">
      <Container fluid>{navbar}</Container>
      <Container>
        <Row>
          <Col xs={6}>
            <PiCard></PiCard>
          </Col>
          <Col xs={6}>
            <SunCard></SunCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
