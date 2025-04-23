import BannerSection from "./components/BannerSection/BannerSection";
import BestBrand from "./components/BestBrands/BestBrand";
import BestOffersSection from "./components/BestOffersSection/BestOffersSection";
import CategorySection from "./components/CategorysSection/CategorySection";
import FeaturedHome from "./components/FeaturedHomeSection/FeaturedHome";
import Footer from "./components/Footer/Footer";
import Header from "./components/HeaderSection/Header";
import InspiredByWellBeing from "./components/InspiredByWellBeing/InpiredByWellBeing";
import { BottomBanners, TopBanners } from "./data/banner.data";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <section className="w-full h-auto">
        <BannerSection banners={TopBanners}/>
      </section>

      <main className="w-full h-auto bg-gray-100 px-4 md:px-20">
        <section id="featured products" className=" pt-4 md:pt-10">
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

        <section id="best brands" className=" mt-4 md:mt-10">
          <BannerSection banners={BottomBanners}/>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
