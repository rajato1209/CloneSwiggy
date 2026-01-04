import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* navigation bar */}
      <nav 
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0px,20px",
        }}
      >
        <div className="nav-logo">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" height={"30px"} width={"100px"} 
          style={{backgroundColor:"red"}} alt="HWBT" />
        </div>
        <div>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "20px",
              justifyContent: "space-around",
            }}
          >
            <li> <Link to="/"> Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li>
              <input type="text" placeholder="Search" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
