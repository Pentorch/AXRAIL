import { Card, Image, Button, Container, Row, Col } from "react-bootstrap";
import "./__cardsreviewsgoogle.scss";

const CardsReviewsGoogle = (props) => {
  return (
    <>
      <Card
        style={{
          width: "21rem",
          backgroundColor: "#FBFBFB",
        }}
        className="card-reviews-google"
      >
        <Card.Img
          className="img-fluid"
          variant="top"
          alt=""
          style={{
            width: "20rem",
            backgroundColor: "#FBFBFB",
          }}
        />
        <Card.Body>
          <ul
            style={{
              marginLeft: "-30px",
              marginTop: "20px",
            }}
          >
            <li>
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GhDyQlI4OhG08etkAaV1D8UudUzj7r42OTcr70w=s56-c0x00000000-cc-rp-mo-ba3"
                alt=""
                className="img-fluid"
                style={{ width: "43px", marginTop: "-5px" }}
              />
            </li>
            <ul>
              <li>
                <p
                  style={{
                    marginTop: "-3px",
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#427FED",
                    fontSize: "15px",
                  }}
                >
                  {props.reviews}
                </p>
                <p
                  style={{
                    marginTop: "-19px",
                    marginLeft: "10px",
                    fontSize: "15px",
                  }}
                >
                  {props.owner}
                </p>
              </li>
            </ul>
          </ul>

          <Image
            src={`../../../src/assets/images/products/${props.img}`}
            style={{ marginRight: "8px", marginBottom: "5px" }}
            className="img-fluid"
          />

          <Card.Text>
            <p style={{ fontSize: "15px" }}>
              {props.text}
              <a href="">read more</a>
            </p>
          </Card.Text>
          <Card.Text className="text-muted" style={{ fontSize: "15px" }}>
            {props.date}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardsReviewsGoogle;
