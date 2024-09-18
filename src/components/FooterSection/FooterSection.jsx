import React, { useState } from "react";
import "./footerSection.scss";
import GetSvg from "../GetSvg/GetSvg";
const FooterSection = ({ needFooterDropDown }) => {
  const [listActive, setListActive] = useState([false, false, false]);
  return (
    <footer className="footer-section__wrapper footer">
      <div className="footer-container">
        <div className="footer-planty__section planty">
          <div className="planty-logo ">
            <div className="planty-logo__picture ">
              <GetSvg svg={"planty-logo__plant"} color={"white"} />
            </div>

            <h1 className="planty-logo__name">Planty</h1>
          </div>
          <p className="planty-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam purus vel quam sit
            sit. Facilisis curabitur ante egestas vitae. Mattis nisl commodo cursus pulvinar
            tristique in eleifend.
          </p>
          <div className="planty-icons">
            <button>
              <GetSvg svg={"facebook"} />
            </button>
            <button>
              <GetSvg svg={"twiter"} />
            </button>
            <button>
              <GetSvg svg={"instagram"} />
            </button>
            <button>
              <GetSvg svg={"linkedin"} />
            </button>
          </div>
        </div>
        <div
          className={
            "footer-sections__wrapper section drop-down"
            // : 'footer-sections__wrapper section'
          }
        >
          <div className="section-wrapper">
            <h2 className="section-title">
              Product
              <button
                onClick={() => {
                  const newListActive = [...listActive];
                  if (newListActive[0]) {
                    newListActive[0] = false;
                  } else {
                    newListActive[2] = false;
                    newListActive[1] = false;
                    newListActive[0] = true;
                  }
                  setListActive(newListActive);
                }}
                className={
                  listActive[0] ? "section-title__arrow-btn active" : "section-title__arrow-btn"
                }
              >
                <GetSvg svg={"arrow"} />
              </button>
            </h2>
            <ul className={listActive[0] ? "section-list active" : "section-list"}>
              <li className="section-list__item">New Arrivals</li>
              <li className="section-list__item">Best Selling</li>
              <li className="section-list__item">Home Decor</li>
              <li className="section-list__item">Kitchen Set</li>
            </ul>
          </div>
          <div className="section-wrapper">
            <h2 className="section-title">
              Services
              <button
                onClick={() => {
                  const newListActive = [...listActive];
                  if (newListActive[1]) {
                    newListActive[1] = false;
                  } else {
                    newListActive[2] = false;
                    newListActive[1] = true;
                    newListActive[0] = false;
                  }
                  setListActive(newListActive);
                }}
                className={
                  listActive[1] ? "section-title__arrow-btn active" : "section-title__arrow-btn"
                }
              >
                <GetSvg svg={"arrow"} />
              </button>
            </h2>
            <ul className={listActive[1] ? "section-list active" : "section-list"}>
              <li className="section-list__item">Catalog</li>
              <li className="section-list__item">Blog</li>
              <li className="section-list__item">Gallery</li>
              <li className="section-list__item">Pricing</li>
            </ul>
          </div>
          <div className="section-wrapper">
            <h2 className="section-title">
              Support
              <button
                onClick={() => {
                  const newListActive = [...listActive];
                  if (newListActive[2]) {
                    newListActive[2] = false;
                  } else {
                    newListActive[2] = true;
                    newListActive[1] = false;
                    newListActive[0] = false;
                  }
                  setListActive(newListActive);
                }}
                className={
                  listActive[2] ? "section-title__arrow-btn active" : "section-title__arrow-btn"
                }
              >
                <GetSvg svg={"arrow"} />
              </button>
            </h2>
            <ul className={listActive[2] ? "section-list active" : "section-list"}>
              <li className="section-list__item">Privacy Policy</li>
              <li className="section-list__item">Contact</li>
              <li className="section-list__item">Company</li>
              <li className="section-list__item">Faq & Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
