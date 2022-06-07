import "./__navbar.scss";

import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";
const NavbarN = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light content-bg h-auto position-relative move-name d-none d-lg-block ">
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto me-auto">
              <li className="nav-item ">
                <a
                  className="nav-link active btn-about"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active btn-about"
                  aria-current="page"
                  href="#"
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item dropdown  content-drop ms-2">
                <a
                  className="nav-link text-product btn-product"
                  id="product"
                  href="#"
                >
                  PRODUCTS
                </a>

                <ul className="add-content-drop">
                  <p>All Products</p>
                  <p>Same-day delivery</p>
                  <p>1-day Delivery</p>
                  <p>2-days Delivery</p>
                  <p>3-days Delivery</p>
                </ul>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link ms-4 btn-about" href="#">
                  TRACKING
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link btn-about" href="#">
                  PORTFOLIO
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled"></a>
              </li>
            </ul>
          </div>
        </div>
        <ul
          className="navbar-nav justify-content-center"
          style={{ marginTop: "-15px", marginBottom: "-15px" }}
        >
          <li className="nav-item ">
            <a className="nav-link btn-about" href="#">
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
      {/* <div>
        {["xl"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="mb-3  content-bg text-white"
          >
            <Container>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className=" me-auto ms-auto pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div> */}
      <div>
        {["xl"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="mb-3 d-block d-lg-none "
          >
            <Container>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  ></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className=" me-auto ms-auto pe-3 text-nav">
                    <Nav.Link href="#action1" className="text-nav">
                      <h5>HOME</h5>
                    </Nav.Link>
                    <Nav.Link href="#action2" className="text-nav">
                      <h5>ABOUT US</h5>
                    </Nav.Link>
                    <NavDropdown
                      title="PRODUCTS"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <h5>PRODUCTS</h5>
                      <NavDropdown.Item href="#action3" className="text-nav">
                        All Products
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4" className="text-nav">
                        Same-Day <br /> Delivery
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5" className="text-nav">
                        1-Day Delivery
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="text-nav">
                        2-Day Delivery
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5" className="text-nav">
                        3-Day Delivery
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action2" className="text-nav">
                      <h5>TRACKING</h5>
                    </Nav.Link>
                    <Nav.Link href="#action2" className="text-nav">
                      <h5>PORTFOLIO</h5>
                    </Nav.Link>
                    <Nav.Link href="#action2" className="text-nav">
                      <h5>CONTACT US</h5>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
};

export default NavbarN;
