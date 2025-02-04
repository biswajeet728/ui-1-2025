import Image from "next/image";
import React from "react";

function Different() {
  return (
    <section className="mt-20 mb-20 px-5 md:px-0">
      <div className="w-full md:w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
          <div className="w-full h-full">
            <Image
              src={"/images/gym-1.png"}
              width={1000}
              height={1000}
              alt="Gym"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 relative">
            <div>
              <h1 className="text-2xl md:text-4xl font-semibold font-spectral leading-[50px]">
                What Makes the CapnoTrainer® go Different?
              </h1>
              <p className="text-sm mt-2 w-full md:w-[500px] font-nuito">
                Unlike traditional breathing tools that focus on shallow
                techniques, the CapnoTrainer® GO goes deeper. It integrates{" "}
                <span className="text-bgSecondary font-semibold font-nuito">
                  psychophysiology, behavioral analysis, and cutting-edge
                  technology
                </span>{" "}
                to provide a complete understanding of your breath’s role in
                health and performance.
              </p>
            </div>
            <div className="mt-10 flex items-end justify-end relative -top-64 md:-top-20">
              <Image
                src={"/images/wave-2.png"}
                width={1000}
                height={1000}
                alt="Wave"
                className="w-fit h-8 md:h-12 object-cover"
              />
            </div>

            <div className="bg-white shadow-lg rounded-md p-3 absolute left-0 md:-left-6 bottom-0 md:bottom-4 z-30! w-fit">
              <span className="text-bgSecondary font-bold text-sm">
                “Breathing is behavior. And behavior can be changed. The
                CapnoTrainer® helps you edit, optimize, and own your breath for
                life.”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Different;
