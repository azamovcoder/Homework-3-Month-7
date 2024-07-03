import "./Category.scss";

import amazon from "../../assets/category/ammazon-logo.svg";
import { categoryData } from "../../static";
import facebook from "../../assets/category/facebook-logo.svg";
import google from "../../assets/category/google-logo.svg";
import left from "../../assets/category/Left.svg";
import microsoft from "../../assets/category/microsoft-logo.svg";
import right from "../../assets/category/Right.svg";
import slack from "../../assets/category/slack-logo.svg";

const Category = () => {
  return (
    <>
      <section className="category">
        <div className="container">
          <div className="category__wrapper">
            <div className="category__top-box">
              <h2 className="category__top-box__title">
                Popular tech companies who are seeking talents in our website
              </h2>
              <ul className="category__top-box__list">
                <li className="category__top-box__item">
                  <a href="#" className="category__top-box__link">
                    <img src={google} alt="google site logo" />
                  </a>
                </li>
                <li className="category__top-box__item">
                  <a href="#" className="category__top-box__link">
                    <img src={slack} alt="Slack site img" />
                  </a>
                </li>
                <li className="category__top-box__item">
                  <a href="#" className="category__top-box__link">
                    <img src={microsoft} alt="Microsoft site log" />
                  </a>
                </li>
                <li className="category__top-box__item">
                  <a href="#" className="category__top-box__link">
                    <img src={facebook} alt="facebook site logo" />
                  </a>
                </li>
                <li className="category__top-box__item">
                  <a href="#" className="category__top-box__link">
                    <img src={amazon} alt="amazon site logo" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="category__bottom-box">
              <div className="category__bottom-box__part">
                <h2 className="category__title">Explore by category </h2>
                <div className="category__swiper-navigate">
                  <button>
                    <img src={left} alt="left navigate svg" />
                  </button>
                  <button>
                    <img src={right} alt="right navigate svg" />
                  </button>
                </div>
              </div>
              <div className="category__bottom-box__cards">
                {categoryData?.map((category) => (
                  <div key={category.id} className="category__bottom-box__card">
                    <img src={category.img} alt={category.title} />
                    <h3 className="category__bottom-box__title">
                      {category.title}
                    </h3>
                    <p className="category__bottom-box__text">{category.job}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
