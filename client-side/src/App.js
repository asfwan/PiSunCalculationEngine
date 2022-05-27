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

function App() {
  // constructor(props) {
  //   super(props);

  //   this.improvePI = this.improvePI.bind(this);
  // }

  let piCard = (
    <Card mt-10 style={{ width: "100%" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>PI Value</Card.Title>
        <Card.Text>
          Most accurate value of PI calculated by our engine.
        </Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>PI Value:</ListGroup.Item>
          <ListGroup.Item>Sample Number:</ListGroup.Item>
        </ListGroup>
        <Button
          variant="primary"
          // onClick={this.improvePI()}
        >
          Improve PI Value
        </Button>
      </Card.Body>
    </Card>
  );

  let sunCard = (
    <Card mt-10 style={{ width: "100%" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Sun Circumference</Card.Title>
        <Card.Text>
          Most accurate Sun Circumference calculated by our engine.
        </Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>PI Value:</ListGroup.Item>
          <ListGroup.Item>Sun Circumference:</ListGroup.Item>
        </ListGroup>
        {/* <Button variant="primary">Improve PI Value</Button> */}
      </Card.Body>
    </Card>
  );

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

  // improvePI = () => {
  //   axios.get("localhost:3001/api/calculate_pi", this.state).then(() => {
  //     alert("success post");
  //   });
  //   console.log(this.state);
  //   document.location.reload();
  // };

  return (
    <div className="App">
      <Container fluid>{navbar}</Container>
      <Container>
        <Row>
          <Col xs={6}>{piCard}</Col>
          <Col xs={6}>{sunCard}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
