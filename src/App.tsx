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
        <BannerSection />
        <FeaturedHome />
      </main>
    </>
  );
}

export default App;