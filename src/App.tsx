import BannerSection from "./components/BannerSection/BannerSection";
import FeaturedHome from "./components/FeaturedHomeSection/FeaturedHome";
import Header from "./components/HeaderSection/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className="relative w-full h-[140px] md:h-[422px]">
          <BannerSection />
        </section >
        <section className="w-full bg-white mt-4 px-4 md:px-10">
          <FeaturedHome />
        </section>
      </main>
    </>
  );
}

export default App;