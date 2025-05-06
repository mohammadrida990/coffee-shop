"use client";
import About from "@/components/About";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default;
      new locomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />

      <Explore />

      <About />

      <Menu />

      <div className="h-[4000px]"></div>
    </div>
  );
};

export default Home;
