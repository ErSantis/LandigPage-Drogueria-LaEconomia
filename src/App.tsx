import BannerSection from "./components/BannerSection/BannerSection";
import BestBrand from "./components/BestBrands/BestBrand";
import BestOffersSection from "./components/BestOffersSection/BestOffersSection";
import CategorySection from "./components/CategorysSection/CategorySection";
import FeaturedHome from "./components/FeaturedHomeSection/FeaturedHome";
import Header from "./components/HeaderSection/Header";
import InspiredByWellBeing from "./components/InspiredByWellBeing/InpiredByWellBeing";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <section className="relative h-[140px] md:h-[422px]">
        <BannerSection />
      </section>

      <main className="w-full bg-gray-100 px-4 md:px-10">
        <section id="featured products" className=" mt-4 md:mt-10">
          <FeaturedHome />
        </section>

        <section id="best offers" className=" mt-4 md:mt-10">
          <BestOffersSection
            title={"Las mejores ofertas"}
            icon={"alarmIcon.png"}
          />
        </section>

        <section id="categorys" className=" mt-4 md:mt-10">
          <CategorySection />
        </section>

        <section id="best offers" className=" mt-4 md:mt-10">
          <BestOffersSection
            title={"Lo más buscado"}
            icon={"starFaceIcon.png"}
          />
        </section>

        <section id="inspired by well being " className=" mt-4 md:mt-10">
          <InspiredByWellBeing />
        </section>

        <section id="best brands" className=" mt-4 md:mt-10">
          <BestBrand />
        </section>
      </main>
    </>
  );
}

export default App;
