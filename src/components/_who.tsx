import Image from "next/image";
import React from "react";

function Who() {
  return (
    <section className="mt-20 mb-20 px-5 md:px-0">
      <div className="w-full md:w-[1000px] mx-auto">
        <div className="flex items-center justify-center mb-3">
          <h1 className="text-2xl md:text-4xl font-spectral font-bold text-center">
            Who Is the CapnoTrainer® GO For?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 p-4">
          <div className="col-span-2 relative">
            <Image
              src={"/images/who-bg-1.png"}
              width={1000}
              height={1000}
              alt="Who 1"
              className="object-cover"
            />

            <div
              className="
     absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%]
      bg-bgSecondary bg-opacity-60 p-2 rounded-lg h-[102px] flex items-start justify-center flex-col
    "
            >
              <h2 className="text-white text-lg font-bold">
                Wellness Enthusiasts
              </h2>
              <p className="text-slate-200 text-sm">
                Achieve better sleep, reduce anxiety, and enhance overall
                vitality.
              </p>
            </div>
          </div>
          <div className="col-span-2 relative">
            <Image
              src={"/images/who-bg-2.png"}
              width={1000}
              height={1000}
              alt="Who 2"
              className="object-cover"
            />

            <div
              className="
      absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] 
      bg-bgSecondary bg-opacity-60 p-2 rounded-lg h-[102px] flex items-start justify-center flex-col
    "
            >
              <h2 className="text-white text-lg font-bold">
                Health Practitioners
              </h2>
              <p className="text-slate-200 text-sm">
                Provide clients with revolutionary breathing behavior analysis
                for lasting results.
              </p>
            </div>
          </div>
          <div className="col-span-2 relative">
            {" "}
            <Image
              src={"/images/who-bg-3.png"}
              width={1000}
              height={1000}
              alt="Who 3"
              className="object-cover"
            />
            <div
              className="
        absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] 
      bg-bgSecondary bg-opacity-60 p-2 rounded-lg h-[102px] flex items-start justify-center flex-col
    "
            >
              <h2 className="text-white text-lg font-bold">
                Athletes & Performers
              </h2>
              <p className="text-slate-200 text-sm">
                Boost endurance, focus, and physical resilience.
              </p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-3 relative">
            <Image
              src={"/images/who-bg-4.png"}
              width={1000}
              height={1000}
              alt="Who 4"
              className="object-cover"
            />

            <div
              className="
     absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] 
      bg-bgSecondary bg-opacity-60 p-2 rounded-lg h-[102px] flex items-start justify-center flex-col
    "
            >
              <h2 className="text-white text-lg font-bold">
                Healthcare Professionals
              </h2>
              <p className="text-slate-200 text-sm">
                Enhance patient care with cutting-edge breathing assessment
                tools.
              </p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 relative">
            <Image
              src={"/images/who-bg-5.png"}
              width={1000}
              height={1000}
              alt="Who 5"
              className="object-cover"
            />

            <div
              className="
     absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] 
      bg-bgSecondary bg-opacity-60 p-2 rounded-lg h-[102px] flex items-start justify-center flex-col
    "
            >
              <h2 className="text-white text-lg font-bold">
                Educators & Trainers
              </h2>
              <p className="text-slate-200 text-sm">
                Incorporate evidence-based breathing techniques into your
                teaching or coaching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Who;
