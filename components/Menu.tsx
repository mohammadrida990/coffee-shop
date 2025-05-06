import React from "react";
import Separator from "./Separator";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    price: 10,
    img: "/assets/cup.svg",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    price: 10,
    img: "/assets/cup.svg",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    price: 10,
    img: "/assets/cup.svg",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    price: 10,
    img: "/assets/cup.svg",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    price: 10,
    img: "/assets/cup.svg",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    price: 10,
    img: "/assets/cup.svg",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    price: 10,
    img: "/assets/cup.svg",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    price: 10,
    img: "/assets/cup.svg",
  },
  {
    id: 9,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    price: 10,
    img: "/assets/cup.svg",
  },
  {
    id: 10,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    price: 10,
    img: "/assets/cup.svg",
  },
];

const Menu = () => {
  return (
    <section className="p-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center text-amber-900 text-4xl capitalize">
            menu
          </h2>

          <Separator bg="text-amber-900" />

          <p className="text-center max-w-[620px] mx-auto text-amber-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea
            saepe, iusto esse rerum quos expedita officia dolor accusantium
            voluptatibus nulla molestias. Officia harum molestiae deleniti
            incidunt repudiandae odio quia.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 xl:gap-24">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-x-16 place-content-center">
            {data.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-4 mb-8">
                  <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full">
                    <Image
                      src={item.img}
                      fill
                      alt=""
                      sizes="50vh"
                      priority
                      quality={100}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col flex-1 gap-2">
                    <div className="flex justify-between gap-4 items-baseline">
                      <p className="uppercase font-semibold text-[22px] leading-none text-amber-900">
                        {item.title}
                      </p>

                      <div className="flex-1 border-b border-dashed border-black"></div>

                      <p className="leading-none font-semibold text-[30px] text-black">
                        {item.price.toFixed(2)}$
                      </p>
                    </div>

                    <p className="text-amber-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
