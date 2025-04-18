import BannerSection from "./components/BannerSection/BannerSection";
import FeaturedHome from "./components/FeaturedHomeSection/FeaturedHome";
import Header from "./components/HeaderSection/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="w-full">
        <section className="relativeh-[140px] md:h-[422px]">
          <BannerSection />
        </section >
        <section className="bg-white mt-4 px-4 md:px-10">
          <FeaturedHome />
        </section>
      </main>
    </>
  );
}

export default App;