import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className=" w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-end">
                  <Image
                    src="/assets/rida.png"
                    alt=""
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>

                <h3 className="text-3xl xl:text-4xl font-bold mb-4">
                  dsdsdsdsd
                </h3>

                <p className="max-w-[400px]">
                  ajhsjhsjashjashjahsjashjashajhsgajsgajgs
                </p>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center ">
                  <Image
                    src="/assets/rida.png"
                    alt=""
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-bold mb-4">
                  dsdsdsdsd
                </h3>
                <p className="max-w-[400px]">
                  ajhsjhsjashjashjahsjashjashajhsgajsgajgs
                </p>
              </div>
            </div>
          </div>

          <div className="hidden xl:flex justify-center">
            <div className="relative w-[320px] h-[580px]">
              <Image
                src="/assets/xxx.svg"
                alt=""
                fill
                className="object-cover"
                priority
                quality={100}
                data-scroll
                data-scroll-speed="0.3"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-around items-atart text-center xl:text-right gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px]  xl:text-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center ">
                  <Image
                    src="/assets/rida.png"
                    alt=""
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>

                <h3 className="text-3xl xl:text-4xl font-bold mb-4">
                  dsdsdsdsd
                </h3>

                <p className="max-w-[400px]">
                  ajhsjhsjashjashjahsjashjashajhsgajsgajgs
                </p>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="xl:max-w-[420px]  xl:text-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center ">
                  <Image
                    src="/assets/rida.png"
                    alt=""
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>

                <h3 className="text-3xl xl:text-4xl font-bold mb-4">
                  dsdsdsdsd
                </h3>

                <p className="max-w-[400px]">
                  ajhsjhsjashjashjahsjashjashajhsgajsgajgs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
