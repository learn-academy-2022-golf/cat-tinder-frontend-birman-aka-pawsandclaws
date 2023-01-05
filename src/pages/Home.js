import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="homebody">
      <div className="homebuttons">
        <NavLink to={`/catindex`} className="nav-link">
          <button className="homebutton">See all cats</button>
        </NavLink>
        <NavLink to={`/catnew`} className="nav-link">
          <button className="homebutton">Create a cat</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
