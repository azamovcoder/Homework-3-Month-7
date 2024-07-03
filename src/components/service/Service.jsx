import React from "react";
import "./service.scss";
import { SERVICE } from "../../static";
import { CiLocationOn } from "react-icons/ci";

function Service() {
  const serviceData = SERVICE?.map((el) => (
    <div key={el?.id} className="service__card">
      <div className="service__card__top">
        <div className="service__card__top__left">
          <CiLocationOn />
          <p>{el?.state}</p>
        </div>
        <button style={{ backgroundColor: el?.btnCl }}>{el.btn}</button>
      </div>
      <div className="service__Card__info">
        <h3>{el?.title}</h3>
      </div>
      <div className="service__card__bottom">
        <img src={el?.logo} alt="" />
        <div className="service__card__bottom__right">
          <h3>{el?.name}</h3>
          <p>{el?.hours}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="service">
      <div className="service__top container">
        <h2>Find a job that you love</h2>
        <button>See All 2359 Jobs</button>
      </div>
      <div className="service__cards container">{serviceData}</div>
    </section>
  );
}

export default Service;
