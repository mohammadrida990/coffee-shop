"use client";

import React, { useLayoutEffect, useRef } from "react";
import Badge from "./Badge";
import Separator from "./Separator";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

const data = [
  {
    imgSrc: "/assets/cup.svg",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    imgSrc: "/assets/cup.svg",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    imgSrc: "/assets/cup.svg",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const About = () => {
  const scrollSection = useRef<HTMLDivElement>(null);
  const scrollTrigger = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const splitInstances: SplitText[] = [];
    gsap.registerPlugin(ScrollTrigger, SplitText);

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

    const blocks = gsap.utils.toArray(".blocks");
    blocks.forEach((block) => {
      const heading = (block as HTMLElement).querySelector(".title");
      const description = (block as HTMLElement).querySelector(".description");
      if (!heading || !description) return;

      const splitTitle = new SplitText(heading, { type: "chars" });
      const splitDescription = new SplitText(description, {
        type: "chars, words, lines",
      });

      splitInstances.push(splitTitle);
      gsap.fromTo(
        splitTitle.chars,
        {
          opacity: 0,
          y: 60,
          rotation: -30,
        },
        {
          scrollTrigger: {
            trigger: block as HTMLElement,
            containerAnimation: animation,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
            onEnter: () => {
              gsap.set(splitTitle.chars, {
                opacity: 0,
                y: 60,
                rotation: -30,
              });
            },
            onLeaveBack: () => {
              gsap.set(splitTitle.chars, {
                opacity: 0,
                y: 60,
                rotation: -30,
              });
            },
          },
          opacity: 1,
          y: 0,
          rotation: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        splitDescription.chars,
        {
          opacity: 0,
          y: 60,
          rotation: -30,
        },
        {
          scrollTrigger: {
            trigger: block as HTMLElement,
            containerAnimation: animation,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
            onEnter: () => {
              gsap.set(splitDescription.chars, {
                opacity: 0,
                y: 60,
                rotation: -30,
              });
            },
            onLeaveBack: () => {
              gsap.set(splitDescription.chars, {
                opacity: 0,
                y: 60,
                rotation: -30,
              });
            },
          },
          opacity: 1,
          y: 0,
          rotation: 0,
          stagger: {
            amount: 0.5,
            from: "random",
          },
          duration: 0.2,
          ease: "power2.out",
        }
      );
    });

    return () => {
      animation.kill();
      splitInstances.forEach((split) => split.revert());
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
                className="blocks w-screen h-screen flex flex-col justify-center items-center"
              >
                <div className="container mx-auto">
                  <div className="flex gap-[30px] relative">
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <Badge containerStyles="w-[160px] h-[160px]" />

                      <div className="mx-w-[560px] text-center">
                        <h2 className="title h2 mb-4">
                          <span className="mr-4 text-amber-600">
                            {item.title.split(" ")[0]}
                          </span>

                          <span className="text-amber-100">
                            {item.title.split(" ")[1]}
                          </span>
                        </h2>

                        <div className="mb-8">
                          <Separator />
                        </div>

                        <p className="description leading-relaxed mb-16 px-8 xl:px-0">
                          {item.description}
                        </p>

                        <button className="btn mb-2">see more</button>
                      </div>
                    </div>

                    <div className="hidden xl:flex flex-1 w-full h-[90vh] relative">
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
