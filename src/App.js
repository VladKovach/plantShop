import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainSection1 from "./components/MainSection1/MainSection1";
import InfoCardsAndFeaturedCards from "./components/InfoCardsAndFeaturedCards/InfoCardsAndFeaturedCards";
import TheBestPlantSection from "./components/TheBestPlantSection/TheBestPlantSection";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import LatestUpdates from "./components/LatestUpdates/LatestUpdates";
import CustomersSection from "./components/CustomersSection/CustomersSection";
import DiscountSection from "./components/DiscountSection/DiscountSection";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {
  const [burgerActive, setBurgerActive] = useState(false);
  const [needDropDowm, setNeedDropDowm] = useState(false);
  const [needHideFooterItems, setNeedHideFooterItems] = useState(false);
  useEffect(() => {
    function headerDropDownHandler() {
      console.log("window.innerWidth =", window.innerWidth);

      if (window.innerWidth <= 605) {
        setNeedHideFooterItems(true);
      } else {
        setNeedHideFooterItems(false);
      }

      if (window.innerWidth <= 767) {
        setNeedDropDowm(true);
      } else {
        setNeedDropDowm(false);
      }
    }

    // Run once on mount
    headerDropDownHandler();

    // Add event listener
    window.addEventListener("resize", headerDropDownHandler);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", headerDropDownHandler);
    };
  }, []);
  return (
    <div className="App">
      <Header burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
      <main className="main">
        <MainSection1 needDropDowm={needDropDowm} burgerActive={burgerActive} />
        <InfoCardsAndFeaturedCards />
        <TheBestPlantSection />
        <PopularProducts />
        <LatestUpdates />
        <CustomersSection />
        <DiscountSection />
      </main>
      <FooterSection needFooterDropDown={needHideFooterItems} />
    </div>
  );
}

export default App;
