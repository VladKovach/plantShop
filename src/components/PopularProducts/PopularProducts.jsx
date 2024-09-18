import React from "react";
import "./popularProducts.scss";
import GalleryItem from "../GalleryItem/GalleryItem";
import GetSvg from "../GetSvg/GetSvg";
import plant1 from "../../assets/images/plant1.jpg";
import plant2 from "../../assets/images/plant2.jpg";
import plant3 from "../../assets/images/plant3.jpg";
import plant4 from "../../assets/images/plant4.jpg";
import plant5 from "../../assets/images/plant5.jpg";
import plant6 from "../../assets/images/plant6.jpg";
const PopularProducts = () => {
  return (
    <div className="popular-products__wrapper popular">
      <div className="popular-container">
        <img src="images/plant-background.png" className="popular-background__image" />
        <div className="popular-header">
          <h2 className="popular-header__title">Our Popular Product</h2>
          <div className="popular-header__subTitle-section">
            <p className="popular-header__subTitle-section__description">
              Shop your favourite plants in your favorable factor, Veggies, Seeds, Citrus, Fruit
              Trees, Herbs and more...
            </p>
            <button className="popular-header__subTitle-section__btn">See All</button>
          </div>
        </div>
        <div className="popular-gallery">
          <GalleryItem name={"Azalea Plant"} price={"$150.00"} img={plant1} />
          <div className="popular-gallery__img-withIcons">
            <GalleryItem name={"Indian Basil"} price={"$160.00"} img={plant2} />
            <div className="popular-gallery__img-withIcons__icons">
              <button>
                <GetSvg svg={"bag-white"} />
              </button>
              <button>
                <GetSvg svg={"search-white"} />
              </button>
              <button>
                <GetSvg svg={"heart-white"} />
              </button>
              <button>
                <GetSvg svg={"sort-white"} />
              </button>
            </div>
          </div>
          <GalleryItem name={"Spider Plant"} price={"$140.00"} img={plant3} />
          <GalleryItem name={"Azalea Plant"} price={"$150.00"} img={plant5} />
          <GalleryItem name={"Indian Basil"} price={"$160.00"} img={plant6} />
          <GalleryItem name={"Spider Plant"} price={"$140.00"} img={plant4} />
        </div>
      </div>
      <img src="images/plant-backGround2.png" alt="" className="popular-backGround2__image" />
    </div>
  );
};

export default PopularProducts;
