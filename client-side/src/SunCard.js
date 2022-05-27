import React from "react";
import axios from "axios";
import { Card, ListGroup, Button } from "react-bootstrap";

export class SunCard extends React.Component {
  componentDidMount() {
    this.fetchLatestSunCircumferenceValue();
  }

  fetchLatestSunCircumferenceValue() {
    axios
      .get("http://localhost:3001/sun_circumference", this.state)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        if (data.err) alert("error");
        this.setState({
          piValue: data.piValue,
          sunCircumference: data.circumferenceOfSun,
        });
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      piValue: "N/A",
      sunCircumference: "N/A",
    };
  }

  render() {
    return (
      <Card style={{ width: "100%" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Sun Circumference</Card.Title>
          <Card.Text>
            Most accurate Sun Circumference calculated by our engine.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>PI Value: {this.state.piValue}</ListGroup.Item>
            <ListGroup.Item>
              Sun Circumference: {this.state.sunCircumference} km
            </ListGroup.Item>
          </ListGroup>
          <Button
            variant="primary"
            onClick={() => {
              this.fetchLatestSunCircumferenceValue();
            }}
          >
            Fetch Latest Value
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SunCard;
