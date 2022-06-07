import CardsReviews from "../Reviews/CardsReviews";
import data from "../../data/CarouselsReviews.json";
import "./__carouselreviews.scss";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";

const CarouselReviews = () => {
  return (
    <div
      className="content-img-carousel"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mt-5 content-text-carousel">
        <h2 className="text-center mt-5 mb-5 text-reviews">
          CUSTOMER'S REVIEWS
        </h2>

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active icon-carousels"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="icon-carousels"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="icon-carousels"
            ></button>
          </div>
          <div className="carousel-inner">
            <div class="carousel-item active">
              <Container>
                <div className="d-block mx-auto" style={{ width: "100%" }}>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={4}>
                        <CardsReviews
                          className="card-reviews"
                          reviews={data.name}
                          owner={data.owner}
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                          text={data.text}
                          date={data.date}
                          images={data.images}
                          tools={data.tools}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div class="carousel-item">
              <Container>
                <div className="d-block mx-auto" style={{ width: "100%" }}>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={4}>
                        <CardsReviews
                          reviews={data.name}
                          owner={data.owner}
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                          text={data.text}
                          date={data.date}
                          images={data.images}
                          tools={data.tools}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div class="carousel-item">
              <Container>
                <div className="d-block mx-auto" style={{ width: "100%" }}>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={4}>
                        <CardsReviews
                          reviews={data.name}
                          owner={data.owner}
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                          text={data.text}
                          date={data.date}
                          images={data.images}
                          tools={data.tools}
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
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
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

export default CarouselReviews;
