import { Card, Image, Button, Container, Row, Col } from "react-bootstrap";
import "./__cardsreviews.scss";

const CardsReviews = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Card style={{ width: "20rem", backgroundColor: "#FBFBFB" }}>
            <Card.Img className="img-fluid" variant="top" alt="" />
            <Card.Body>
              <Card.Title> {props.reviews}</Card.Title>
              <ul style={{ marginLeft: "-30px" }}>
                <li className="global-views">
                  <img
                    src="https://c3lab-my.com/wp-content/plugins/customer-reviews-woocommerce/img/verified.svg"
                    alt=""
                    style={{ width: "23px" }}
                  />
                </li>
                <ul>
                  <li>
                    <p className="text-owner" style={{ marginTop: "-3px" }}>
                      {props.owner}
                    </p>
                  </li>
                </ul>
              </ul>
              <br />
              <hr />

              <Image
                src={`../../../src/assets/images/products/${props.img}`}
                style={{ marginLeft: "-16px" }}
                className="img-fluid img-start"
              />
              <Card.Text className="text-views">{props.text}</Card.Text>
              <Card.Text
                className="text-muted text-views-date"
                style={{ fontSize: "15px" }}
              >
                {props.date}
              </Card.Text>
              <Card.Text className="text-muted" style={{ fontSize: "15px" }}>
                <div
                  className="img-card-reviews"
                  style={{ backgroundColor: "#F2F2F2", padding: "20px" }}
                >
                  <ul>
                    <li>
                      <Image
                        src={`../../../src/assets/images/products/${props.images}`}
                        style={{
                          width: "20%",
                          marginLeft: "-30px",
                          position: "relative",
                          top: "-10px",
                        }}
                        className="img-fluid img-views-name"
                      />
                    </li>
                  </ul>
                  <ul style={{ marginLeft: "20px" }}>
                    <li style={{ marginTop: "-40px" }}>
                      <h5>{props.tools}</h5>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default CardsReviews;
