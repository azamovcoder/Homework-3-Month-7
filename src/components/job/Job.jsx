import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import jobImg from "./img/job.svg";
import "./job.scss";

const Job = () => {
  return (
    <section className="job">
      <div className="container job__container">
        <div className="job__img">
          <img src={jobImg} alt="" />
        </div>
        <div className="job__info">
          <h4 className="job__name">Join over 15,000+ tech people</h4>
          <h3 className="job__title">Get instant alert on your inbox</h3>
          <p className="job__desc">
            We receive over 50 new job submission at our website. Subscribe to
            our newsletter and get instant job alert on your inbox to apply.{" "}
          </p>
          <form action="" className="job__form">
            <div className="job__input">
              <MdOutlineMailOutline />
              <input type="email" placeholder="Enter your email" />
            </div>
            <button className="job__btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Job;
