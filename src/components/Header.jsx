import React from "react";

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
          <img src="" alt="HWBT" />
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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <input type="text" for="usearch" placeholder="Search" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
