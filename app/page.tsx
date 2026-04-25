import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";
import Manifesto from "@/components/Manifesto";
import MegaCta from "@/components/MegaCta";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Manifesto />
        <MegaCta />
      </main>
      <Footer />
    </>
  );
}
