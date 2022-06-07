import React from "react";
import { Card, Image } from "react-bootstrap";

const Cards = (props) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img className="img-fluid" variant="top" alt={props.product} />
      <Image
        className="img-card"
        src={`../../../src/assets/images/products/${props.img}`}
      />
    </Card>
  );
};

export default Cards;
