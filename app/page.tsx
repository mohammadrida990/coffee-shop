"use client";
import About from "@/components/About";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Opening from "@/components/Opening";
import Photos from "@/components/Photos";
import React, { useEffect, useRef } from "react";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default;
      new locomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);

  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-full overflow-x-hidden">
      <Hero onMenuClick={scrollToMenu} />

      <Explore />

      <About />

      <Menu ref={menuRef} />

      <Opening />

      <Photos />

      <div className="h-[25vh]"></div>
    </div>
  );
};

export default Home;
