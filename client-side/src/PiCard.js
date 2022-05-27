import React from "react";
import axios from "axios";
import { Button, Card, ListGroup } from "react-bootstrap";

export class PiCard extends React.Component {
  improvePI() {
    axios.get("http://localhost:3001/calculate_pi", this.state).then((res) => {
      console.log(res.data);
      const data = res.data;
      if (data.err) alert("error");
      this.setState({
        piValue: data.calculatedPiResult.pi_value,
        sampleNumber: data.calculatedPiResult.sample_number,
      });
    });
    // console.log(this.state);
    // document.location.reload();
  }

  constructor(props) {
    super(props);
    this.state = {
      piValue: "N/A",
      sampleNumber: "N/A",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/best_pi_value", this.state).then((res) => {
      console.log(res.data);
      const data = res.data;
      if (data.err) alert("error");
      this.setState({
        piValue: data.mostAccuratePiValue.pi_value,
        sampleNumber: data.mostAccuratePiValue.sample_number,
      });
    });
  }

  render() {
    return (
      <Card style={{ width: "100%" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>PI Value</Card.Title>
          <Card.Text>
            Most accurate value of PI calculated by our engine.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>PI Value: {this.state.piValue}</ListGroup.Item>
            <ListGroup.Item>
              Sample Number: {this.state.sampleNumber}
            </ListGroup.Item>
          </ListGroup>
          <Button
            variant="primary"
            onClick={() => {
              this.improvePI();
            }}
          >
            Improve PI Value
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default PiCard;
