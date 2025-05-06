"use client";
import About from "@/components/About";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Opening from "@/components/Opening";
import Photos from "@/components/Photos";
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

      <Opening />

      <Photos />

      <div className="h-[25vh]"></div>
    </div>
  );
};

export default Home;
