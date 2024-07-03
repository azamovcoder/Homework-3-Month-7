import "./Hero.scss";

import { IoLocationOutline, IoSearch } from "react-icons/io5";
import React, { Fragment } from "react";

import Down from "../../assets/header/down.svg";
import Location from "../../assets/header/loc.svg";

const Hero = () => {
  return (
    <Fragment>
      <div className="hero">
        <div className="container">
          <h1>Join the most popular tech companies.</h1>
          <p>
            We’ve helped over 2,500 job seekers to get into the most popular
            tech teams.
          </p>
          <img src={Down} alt="" />
          <div className="hero__input">
            <div className="hero__input__item">
              <IoSearch color="#8C97AC" />
              <input type="text" placeholder="Try “Software Developer”" />
            </div>
            <div className="hero__input__item">
              <IoLocationOutline color="#8C97AC" />
              <select name="" id="">
                <option value="">New York, USA</option>
                <option value="">Moscow, Russia</option>
                <option value="">London, UK</option>
              </select>
            </div>
            <button>Search Job</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
