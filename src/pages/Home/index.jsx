import { useEffect } from "react";
import Depoimentos from "./Depoimentos";
import Destaques from "./Destaques";
import HeroSection from "./HeroSection";
import Historia from "./Historia";
import Newsletter from "./Newsletter";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <HeroSection />
      <Destaques />
      <Historia />
      <Depoimentos />
      <Newsletter />
    </>
  );
}
