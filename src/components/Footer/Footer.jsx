import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ddd",
          padding: "20px",
          marginBottom: "50px",
        }}
      ></div>
      <Container>
        <Row>
          <Col md={5}>
            <Image
              src="../../../src/assets/images/products/payment-band.png"
              className="img-fluid"
              style={{ width: "100%", marginLeft: "-20px" }}
            />
          </Col>
          <Col md={7}>
            <p
              className="text-muted text-copyright"
              style={{
                fontWeight: "500",
                fontSize: "12px",
                marginLeft: "60%",
                marginBottom: "30px",
              }}
            >
              © 2021 C3 Lab Sdn Bhd, All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
