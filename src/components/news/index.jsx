import "./news.scss";

import { NEWS_DATA } from "../../static";
import React from "react";

// import news1 from "../../../assets/news/news1.png";
// import news2 from "../../../assets/news/news2.png";
// import news3 from "../../../assets/news/news3.png";
// import news4 from "../../../assets/news/news4.png";

const News = () => {
  let card = NEWS_DATA.map((card) => (
    <div key={card.id} className="news__card">
      <div className="news__card__img">
        <img src={card.img} alt="" />
      </div>
      <div className="news__card__info">
        <h3>{card.title}</h3>
        <div className="news__card__time">
          <p>{card.day}</p>
          <p>{card.min}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <section id="news">
      <div className="container news">
        <h2 className="section__title">Latest news about job trends</h2>
        <div className="news__cards">{card}</div>
        <button className="news__btn">See all blog posts</button>
      </div>
    </section>
  );
};

export default News;
