import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />

      <div className="nav-header">
        <div className="nav-title">Simple Order</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/Order">Order</a>
      </div>
    </div>
  );
};
export default Navbar;
