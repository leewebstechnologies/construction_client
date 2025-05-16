import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import "./page.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
