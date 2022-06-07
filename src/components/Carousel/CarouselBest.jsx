import CardsBest from "../Cart/CardsBest";
import data from "../../data/CarouselBest.json";
import "./__carousel.scss";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";

const CarouselBest = () => {
  return (
    <div className="content-img-carousel" data-aos="zoom-in">
      <div className="container mt-5 content-text-carousel">
        <h2 className="text-center mt-5 mb-5 text-best">OUR BEST SELLING</h2>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active icon-carousel"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="icon-carousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="icon-carousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              className="icon-carousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
              className="icon-carousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
              className="icon-carousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
              className="icon-carousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
              className="icon-carousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="8"
              aria-label="Slide 9"
              className="icon-carousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="9"
              aria-label="Slide 10"
              className="icon-carousel"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Container>
                <div>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={3}>
                        <CardsBest
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div className="carousel-item">
              <Container>
                <div>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={3}>
                        <CardsBest
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div className="carousel-item">
              <Container>
                <div>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={3}>
                        <CardsBest
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div className="carousel-item">
              <Container>
                <div>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={3}>
                        <CardsBest
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div className="carousel-item">
              <Container>
                <div>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={3}>
                        <CardsBest
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div className="carousel-item">
              <Container>
                <div>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={3}>
                        <CardsBest
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div className="carousel-item">
              <Container>
                <div>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={3}>
                        <CardsBest
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div className="carousel-item">
              <Container>
                <div>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={3}>
                        <CardsBest
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div className="carousel-item">
              <Container>
                <div>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={3}>
                        <CardsBest
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
            <div className="carousel-item">
              <Container>
                <div>
                  <Row>
                    {data.map((data) => (
                      <Col key={data.id} md={3}>
                        <CardsBest
                          key={data.id}
                          dataId={data.id}
                          img={data.img}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselBest;
