import Image from "next/image";
import React from "react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

function Description() {
  return (
    <section className="mt-24 mb-6 px-5 md:px-0">
      <div className="max-w-full md:max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-start">
          <div className="flex-1">
            <div className="flex items-center gap-5">
              <h3 className="text-bgSecondary text-2xl md:text-3xl font-spectral font-semibold">
                What Is the
              </h3>
              <Image
                src={"/images/wave-2-color.png"}
                width={1000}
                height={1000}
                alt="Wave"
                className="w-fit h-8 object-cover"
              />
            </div>
            <h2
              className="
                text-2xl md:text-4xl mt-2 font-spectral font-semibold text-bgSecondary
            "
            >
              CapnoTrainer® GO?
            </h2>
            <p className="mt-2 text-sm text-slate-700 pr-12 leading-7">
              The CapnoTrainer® GO isn’t just a tool—it’s your personal gateway
              to a healthier, more aligned you. Using advanced capnography
              technology, it provides real-time insights into your breathing
              behavior by measuring CO2 levels and visualizing your breathing
              patterns. Paired with a guided learning framework, it empowers you
              to:
            </p>

            <div className="flex-col gap-3 mt-5 w-full flex md:hidden">
              <div className="bg-bgPrimaryLight w-full p-2 rounded-md flex items-center gap-1 shadow-md">
                <TbRosetteDiscountCheckFilled
                  size={18}
                  className="text-green-400"
                />
                <span className="text-[11px] text-teal-700 font-bold">
                  Identify and correct dysfunctional breathing habits.
                </span>
              </div>
              <div className="bg-bgPrimaryLight w-full p-1 rounded-md flex items-center gap-1 shadow-md">
                <TbRosetteDiscountCheckFilled
                  size={18}
                  className="text-green-400"
                />
                <span className="text-[11px] text-teal-700 font-bold">
                  Understand the triggers and motivations behind your habits.
                </span>
              </div>
              <div className="bg-bgPrimaryLight w-full p-1 rounded-md flex items-center gap-1 shadow-md">
                <TbRosetteDiscountCheckFilled
                  size={18}
                  className="text-green-400"
                />
                <span className="text-[11px] text-teal-700 font-bold">
                  Optimize your respiration for health, focus, and performance.
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 -ml-6 md:-ml-12 relative mt-6 md:mt-0">
            <div className="w-[350px] h-auto relative">
              <Image
                src={"/images/book-desk.png"}
                width={1000}
                height={1000}
                alt="Book"
                className="w-full h-full object-cover"
              />

              <div className="flex-col gap-3 absolute top-20 md:top-10 left-0 md:left-52 w-full hidden md:flex">
                <div className="bg-bgPrimaryLight w-full p-2 rounded-md flex items-center gap-1 shadow-md">
                  <TbRosetteDiscountCheckFilled
                    size={18}
                    className="text-green-400"
                  />
                  <span className="text-[11px] text-teal-700 font-bold">
                    Identify and correct dysfunctional breathing habits.
                  </span>
                </div>
                <div className="bg-bgPrimaryLight w-full p-1 rounded-md flex items-center gap-1 shadow-md">
                  <TbRosetteDiscountCheckFilled
                    size={18}
                    className="text-green-400"
                  />
                  <span className="text-[11px] text-teal-700 font-bold">
                    Understand the triggers and motivations behind your habits.
                  </span>
                </div>
                <div className="bg-bgPrimaryLight w-full p-1 rounded-md flex items-center gap-1 shadow-md">
                  <TbRosetteDiscountCheckFilled
                    size={18}
                    className="text-green-400"
                  />
                  <span className="text-[11px] text-teal-700 font-bold">
                    Optimize your respiration for health, focus, and
                    performance.
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <Image
                src={"/images/wave-2.png"}
                width={1000}
                height={1000}
                alt="Wave"
                className="w-32 h-32 md:w-52 md:h-52 object-scale-down absolute -bottom-8 md:-bottom-7 -right-24 md:right-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
