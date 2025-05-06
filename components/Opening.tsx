import Image from "next/image";
import React from "react";
import Badge from "./Badge";
import Separator from "./Separator";

const Opening = () => {
  return (
    <section className="flex h-[60vh] xl:h-[80vh]">
      <div className="hidden relative xl:flex flex-1 justify-center items-center">
        <div className="absolute bg-black/60 top-0 w-full h-full z-40" />

        <Image
          src="/assets/coffee.jpg"
          alt=""
          fill
          priority
          quality={100}
          className="object-cover"
        />

        <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
      </div>

      <div className="flex-1 bg-cover  bg-no-repeat flex flex-col justify-center items-center relative bg-[url('/assets/coffee2.jpg')] ">
        <div className="absolute bg-black/60 top-0 w-full h-full z-10" />

        <div className="z-20 flex flex-col items-center justify-center">
          <h2 className="h2 text-white mb-4 font-mystery-quest">
            Opening hours
          </h2>

          <Separator />

          <div className="relative mt-12 w-[300px] h-[300px] xl:w-[470px] xl:h-[400px]">
            <Image
              src="/assets/time.png"
              fill
              quality={100}
              priority
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opening;
