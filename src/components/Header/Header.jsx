import React from "react";
import "./__header.scss";
import cart from "../../assets/images/shopping-bag.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img
          src="https://c3lab-my.com/wp-content/uploads/2020/08/c3-logo2-01-white-02.png"
          className=" logo"
        />
        <img src={cart} alt="" className="content-cart" />
      </div>
    </div>
  );
};

export default Header;
