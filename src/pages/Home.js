import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Welcome to Cat Tinder!
      <p></p>
      <img
        style={{ width: 400 }}
        src="https://marketplace.canva.com/EAE1bgLSi2M/1/0/1245w/canva-white-free-cute-funny-cat-t-shirt-vf3P1-P68aQ.jpg"
        alt="a cute picture of a cat"
      />
      <NavLink to={`/catindex`} className="nav-link">
        See all cats
      </NavLink>
      <NavLink to={`/catnew`} className="nav-link">
        Create a cat
      </NavLink>
    </div>
  );
};

export default Home;
