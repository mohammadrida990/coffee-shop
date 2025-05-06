"use client";

import React, { useLayoutEffect, useRef } from "react";
import Badge from "./Badge";
import Separator from "./Separator";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const data = [
  {
    imgSrc: "/assets/xxx.svg",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    imgSrc: "/assets/xxx.svg",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    imgSrc: "/assets/xxx.svg",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const About = () => {
  const scrollSection = useRef<HTMLDivElement>(null);
  const scrollTrigger = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      scrollSection.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTrigger.current,
          start: "top top",
          end: "1000vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-accent">
      <div ref={scrollTrigger}>
        <div ref={scrollSection} className="w-[300vw] h-screen flex relative">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-screen h-screen flex flex-col justify-center items-center"
              >
                <div className="container mx-auto">
                  <div className="flex gap-[30px] relative">
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <Badge containerStyles="w-[180px] h-[180px]" />

                      <div className="mx-w-[560px] text-center">
                        <h2 className="text-white h2 mb-4">
                          <span className="mr-4">
                            {item.title.split(" ")[0]}
                          </span>

                          <span className="text-accent">
                            {item.title.split(" ")[1]}
                          </span>
                        </h2>

                        <div className="mb-8">
                          <Separator />
                        </div>

                        <p className="leading-relaxed mb-16 px-8 xl:px-0">
                          {item.description}
                        </p>

                        <button className="btn">see more</button>
                      </div>
                    </div>

                    <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                      <Image
                        src={item.imgSrc}
                        alt=""
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
