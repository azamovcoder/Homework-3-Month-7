import "./Footer.scss";

import React, { Fragment } from "react";

import Logo from "../../../assets/header/logo.svg";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__container__info">
            <img src={Logo} alt="" />
            <p>
              Finity has a collection of latest 2,500 jobs to join next
              companies.
            </p>
          </div>
          <ul className="footer__container__list">
            <li>
              <h4>Community</h4>
            </li>
            <li>
              <a href="">For Talents For</a>
            </li>
            <li>
              <a href="">For Companies</a>
            </li>
            <li>
              <a href="">Facebook Group</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
          <ul className="footer__container__list">
            <li>
              <h4>About us</h4>
            </li>
            <li>
              <a href="">Meet the Team</a>
            </li>
            <li>
              <a href="">Our Story</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
          </ul>
          <ul className="footer__container__list">
            <li>
              <h4>Useful</h4>
            </li>
            <li>
              <a href="">Free Resume Builder</a>
            </li>
            <li>
              <a href="">Free Graphics</a>
            </li>
            <li>
              <a href="">Career Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom container">
          <p>© Finity 2019, All Rights Reserved</p>
          <p>Built with love by Grayic</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
