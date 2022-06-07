import { Card, Image } from "react-bootstrap";

const CardsBest = (props) => {
  return (
    <div className="container">
      <Card style={{ width: "15rem", height: "17rem" }}>
        <Card.Img className="img-fluid" variant="top" alt={props.carts} />
        <Image
          className="img-card"
          src={`../../../src/assets/images/products/${props.img}`}
        />
      </Card>
    </div>
  );
};

export default CardsBest;
