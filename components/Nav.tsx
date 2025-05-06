import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

const heightAnimation = {
  initial: {
    height: 0,
  },
  open: {
    height: "85vh",
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  close: {
    height: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/" },
  { name: "Contact", href: "/" },
  { name: "About", href: "/" },
];
const Nav = () => {
  useEffect(() => {
    const splitContent = SplitText.create(".abc", {
      type: "chars, words, lines",
    });

    gsap.from(splitContent.chars, {
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
      ease: "power3.out",
    });
  }, []);
  return (
    <motion.nav
      className="bg-black  overflow-hidden absolute z-[50] -top-full w-full"
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="close"
    >
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <ul className="flex flex-col gap-10 font-semibold text-4xl text-accent items-center uppercase">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="abc flex overflow-hidden hover:text-white transition-all"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
