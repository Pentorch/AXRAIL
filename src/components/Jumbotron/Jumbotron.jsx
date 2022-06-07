import React from "react";
import bg from "../../assets/images/bakery.png";
import { Container, Row, Col } from "react-bootstrap";
import "./__jumbotron.scss";
const Jumbotron = () => {
  return (
    <div className="content-jumbotron">
      <Container>
        <Row>
          <Col md={5}>
            <h2
              style={{
                color: "#rgb(85,85,85)",
                fontSize: "33px",
                fontWeight: "350",
                marginTop: "140px",
              }}
            >
              Happy Mother’s Day ~
            </h2>
            <p>
              Mommy is off duty, maybe go ask your dad …
              <br />[ click here to view product ]
            </p>
          </Col>
          <Col md={7}>
            <img
              src={bg}
              alt=""
              style={{ width: "98%", marginLeft: "70px" }}
              className="img-fluid img-jumbotron"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;
