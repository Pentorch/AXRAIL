import Cards from "../Product/Cards";
import data from "../../data/Carousels.json";
import "./__carousel.scss";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
const CarouselN = () => {
  return (
    <div className="content-img-carousel">
      <div className="container mt-5 content-text-carousel">
        <h1>New Sweet Innovation In Town</h1>
        <p>
          TEXTURE by C3 Lab was founded under the impression of C3 Lab. Pastry
          creation had been around for decades, the fundamental of pastry is
          created by the wisdom of the past generation. In such modern days, we
          wish to adopt the fundamental knowledge which has been passed down and
          innovates it further to suit the taste of the modern society nowadays,
          bringing you the new sweet innovation into town.
        </p>

        <Carousel className="card-carousel mb-5" indicators={false}>
          <Carousel.Item>
            <Container>
              <div>
                <Row>
                  {data.map((data) => (
                    <Col key={data.id} md={3}>
                      <Cards key={data.id} dataId={data.id} img={data.img} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <div className="d-block " style={{ width: "100%" }}>
                <Row>
                  {data.map((data) => (
                    <Col key={data.id} md={3}>
                      <Cards key={data.id} dataId={data.id} img={data.img} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <div className="d-block " style={{ width: "100%" }}>
                <Row>
                  {data.map((data) => (
                    <Col key={data.id} md={3}>
                      <Cards key={data.id} dataId={data.id} img={data.img} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselN;
