import CardsReviewsGoogle from "../Google/CardsReviewsGoogle";
import data from "../../data/CarouselsReviewsGoogle.json";
import "./__carouselreviewsgoolge.scss";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";

const CarouselReviewsGoogle = () => {
  return (
    <div className="content-img-carousel">
      <div className="container mt-5 content-text-carousel">
        <h2 className="text-center mt-5 mb-5 text-reviews-google">
          GOOGLE REVIEWS
        </h2>

        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators google-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active icon-carousel-google"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="icon-carousel-google"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="icon-carousel-google"
            ></button>
          </div>
          <div class="carousel-inner card-carousel-google">
            <div class="carousel-item active" data-bs-interval="10000">
              <Container>
                <div className="d-block" style={{ width: "100%" }}>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={4}>
                        <CardsReviewsGoogle
                          reviews={data.name}
                          owner={data.owner}
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                          text={data.text}
                          images={data.images}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <Container>
                <div className="d-block" style={{ width: "100%" }}>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={4}>
                        <CardsReviewsGoogle
                          reviews={data.name}
                          owner={data.owner}
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                          text={data.text}
                          images={data.images}
                          className="me-auto ms-auto"
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div class="carousel-item">
              <Container>
                <div className="d-block " style={{ width: "100%" }}>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={4}>
                        <CardsReviewsGoogle
                          reviews={data.name}
                          owner={data.owner}
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                          text={data.text}
                          images={data.images}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselReviewsGoogle;
