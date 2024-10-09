import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header flex justify-center items-center h-28 w-full bg-customGray">
      <div className="header-content">
        <ul className="header-list flex gap-20 text-lg font-sans text-gray-300 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
