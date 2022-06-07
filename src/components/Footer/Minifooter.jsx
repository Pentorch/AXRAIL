import React from "react";
import "./__footer.scss";
const Minifooter = () => {
  return (
    <div style={{ marginTop: "-20px", marginLeft: "22px" }}>
      <ul>
        <li className="d-inline-block" style={{ marginLeft: "100px" }}>
          <a
            className=" text-content-minifooter"
            style={{ textDecoration: "none", color: "#222", fontWeight: "500" }}
          >
            DISCOVER MORE
          </a>
          <hr style={{ marginTop: "1px", color: "#222" }} />
        </li>
      </ul>

      <ul>
        <li style={{ marginLeft: "20px" }}>
          <a
            href="#"
            style={{ textDecoration: "none", color: "#222", fontWeight: "500" }}
          >
            {" "}
            VIEW OUR PORTFOLIO
          </a>
          <hr style={{ marginTop: "1px" }} />
        </li>
      </ul>

      <ul>
        <li style={{ marginLeft: "20px" }}>
          <a
            href="#"
            style={{ textDecoration: "none", color: "#222", fontWeight: "500" }}
          >
            VIEW OUR PORTFOLIO
          </a>
          <hr style={{ marginTop: "1px" }} />
        </li>
      </ul>
      <br />
      <hr className="container" style={{ marginTop: "80px", width: "80%" }} />
    </div>
  );
};

export default Minifooter;
