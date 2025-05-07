"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Photos = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const images = gsap.utils.toArray<HTMLElement>(".photo-layer");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: containerRef.current,
        },
      })
      .fromTo(
        images[1],
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 }
      )

      .fromTo(
        images[2],
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1 }
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [{ scope: containerRef }]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-white py-12">
      <div
        ref={containerRef}
        className="h-screen w-full sticky top-0 overflow-hidden"
      >
        <div className="photo-layer absolute inset-0 z-10">
          <Image
            src="/assets/coffee.jpg"
            alt="Image 1"
            fill
            sizes="50vh"
            quality={100}
            className="object-contain md:object-cover"
          />
        </div>

        <div className="photo-layer absolute inset-0 z-20 opacity-0">
          <Image
            src="/assets/coffee2.jpg"
            alt="Image 2"
            fill
            sizes="50vh"
            quality={100}
            className="object-contain md:object-cover"
          />
        </div>

        <div className="photo-layer absolute inset-0 z-30 opacity-0">
          <Image
            src="/assets/coffee.jpg"
            alt="Image 3"
            fill
            sizes="50vh"
            quality={100}
            className="object-contain md:object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Photos;
