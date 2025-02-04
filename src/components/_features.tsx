import Image from "next/image";
import React from "react";

function Features() {
  return (
    <section className="mt-20">
      <div className="w-full md:w-[1050px] mx-auto">
        <div className="flex items-center justify-center mb-3">
          <h1 className="text-2xl md:text-4xl font-spectral font-bold text-center">
            Key Features You’ll Love
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 p-4 mt-5">
          <div className="w-full flex flex-col gap-2 items-center justify-center md:items-start md:justify-start">
            <Image
              src={"/images/feature-1.png"}
              width={1000}
              height={1000}
              alt="Feature 1"
              className="w-14 h-14 object-cover"
            />
            <h1 className="font-nuito text-base font-bold">
              Real-Time Monitoring
            </h1>

            <p className="text-sm text-slate-700 text-center md:text-left">
              Track your breathing metrics like CO2 concentration, breathing
              rate, and rhythm.
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 items-center justify-center md:items-start md:justify-start">
            <Image
              src={"/images/feature-2.png"}
              width={1000}
              height={1000}
              alt="Feature 2"
              className="w-14 h-14 object-cover"
            />

            <h1 className="font-nuito text-base font-bold">
              Capnogram Visualization
            </h1>

            <p className="text-sm text-slate-700 text-center md:text-left">
              Get instant feedback on your breathing mechanics and see the
              impact of adjustments in real-time.
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 items-center justify-center md:items-start md:justify-start">
            <Image
              src={"/images/feature-3.png"}
              width={1000}
              height={1000}
              alt="Feature 3"
              className="w-14 h-14 object-cover"
            />

            <h1 className="font-nuito text-base font-bold">
              Custom Learning Plans
            </h1>

            <p className="text-sm text-slate-700 text-center md:text-left">
              Tailored strategies to help you unlearn bad habits and master new
              ones.
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 items-center justify-center md:items-start md:justify-start">
            <Image
              src={"/images/feature-4.png"}
              width={1000}
              height={1000}
              alt="Feature 4"
              className="w-14 h-14 object-cover"
            />

            <h1 className="font-nuito text-base font-bold">
              Interactive Practicums
            </h1>

            <p className="text-sm text-slate-700 text-center md:text-left">
              Experiment with guided breathing challenges to align behavior with
              physiology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
