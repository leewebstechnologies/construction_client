import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Quick from "./components/quick/Quick";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import Welcome from "./components/welcome/Welcome";
import Why from "./components/why/Why";
import Years from "./components/years/Years";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Quick />
      <Welcome />
      <Years />
      <Services />
      <Why />
      <Testimonial />
    </>
  );
}
