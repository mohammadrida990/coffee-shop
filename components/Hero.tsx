"use client";

import React from "react";
import Badge from "./Badge";
import Separator from "./Separator";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  gsap.registerPlugin(SplitText, useGSAP);
  useGSAP(() => {
    const splitTitle = SplitText.create(".hero", { type: "words, chars" });
    const splitContent = SplitText.create(".lead", {
      type: "chars, words, lines",
    });
    const animation = gsap.timeline({
      delay: 1,
    });
    const xxx = () => {
      animation
        .set(".main-box", { opacity: 1 })

        .from(splitTitle.words, {
          duration: 1,
          rotation: "random(-360, 360)",
          yPercent: "random([-100,100])",
          y: 100,
          autoAlpha: 0,
          mask: "char",
          stagger: {
            amount: 0.5,
            from: "random",
          },
        })
        .from(splitContent.chars, {
          duration: 1,
          rotation: "random(-360, 360)",
          yPercent: "random([-100,100])",
          y: 100,
          autoAlpha: 0,
          mask: "char",
          stagger: {
            amount: 0.5,
            from: "random",
          },
        });
    };
    if (document.readyState === "complete") {
      xxx();
    } else {
      window.addEventListener("load", xxx);
      return () => {
        animation.kill();
      };
    }
  }, []);

  return (
    <section className="h-[80vh] xl:h-screen relative text-white ">
      <div className="absolute w-full h-full z-10 bg-black/90" />

      <video
        autoPlay
        loop
        preload="none"
        muted
        playsInline
        poster="/assets/coffee.jpg"
        className="absolute top-0 left-0 h-full w-full object-cover "
      >
        <source src="/assets/208001_small.mp4" type="video/mp4" />
        your browser does not support the video tag
      </video>

      <div className="main-box opacity-0 container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full"
        >
          <div className="flex flex-col items-center ">
            <Badge containerStyles="hidden w-[40px] h-[40px] xl:flex xl:w-[160px] xl:h-[160px] xl:top-5" />

            <h1 className="h1 hero font-mystery-quest">
              <span className="text-accent">Coffee </span>
              <span className="text-amber-100">Rida</span>
            </h1>
          </div>

          <Separator />

          <p className="lead font-light italic max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis saepe
            perspiciatis voluptate fugit at, aliquid eligendi autem et dolore,
            modi beatae asperiores. Laborum ab illum neque optio. Modi,
            reprehenderit vero!
          </p>

          <button className="btn">menu</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
