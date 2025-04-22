import BannerSection from "./components/BannerSection/BannerSection";
import BestOffersSection from "./components/BestOffersSection/BestOffersSection";
import CategorySection from "./components/CategorysSection/CategorySection";
import FeaturedHome from "./components/FeaturedHomeSection/FeaturedHome";
import Header from "./components/HeaderSection/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="w-full bg-gray-100">
        <section className="relative h-[140px] md:h-[422px]">
          <BannerSection />
        </section >
        <section className="mt-4 px-4 md:px-10">
          <FeaturedHome />
        </section>
        <section className="mt-10 px-4 md:px-10">
          <BestOffersSection title={"Las mejores ofertas"} icon={"alarmIcon.png"} />
        </section>
        <section className="mt-10 px-4 md:px-10">
          <CategorySection />
        </section>
        <section className="mt-10 px-4 md:px-10">
          <BestOffersSection title={"Lo más buscado"} icon={"starFaceIcon.png"} />
        </section>
      </main>
    </>
  );
}

export default App;