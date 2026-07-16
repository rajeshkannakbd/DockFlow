import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FloatingButtons from "../layout/FloatingButton";

import Hero from "../Components/home/Hero";
import Services from "../Components/home/Services";
import WhyChooseUs from "../Components/home/WhyChooseUs";
import Stats from "../Components/home/Stats";
import Process from "../Components/home/Process";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <WhyChooseUs />

      <Stats />

      <Process />

      <FloatingButtons />

      <Footer />
    </>
  );
}

export default Home;