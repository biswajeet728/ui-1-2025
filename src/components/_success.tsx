import Image from "next/image";
import React from "react";

function Success() {
  return (
    <article className="bg-bgPrimaryLight h-full py-8 relative mb-5">
      <h1 className="text-center text-2xl md:text-4xl font-bold font-spectral">
        Real Success Stories
      </h1>

      {/* Ensure div is visible even without content */}
      <div className="mt-5 bg-bgSecondary w-full min-h-[60px]"></div>

      <div className="w-full md:w-[1000px] mx-auto -mt-[60px] px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-full flex flex-col">
            <div className="bg-bgPrimaryLight w-full p-3 rounded-tl-md rounded-tr-md shadow-xl z-30">
              <h1 className="text-sm font-nuito font-bold text-bgSecondary">
                "I thought I knew how to breathe—until I used the CapnoTrainer®
                GO. This device opened my eyes to habits I never realized were
                harming me. I feel more energized and focused than ever before!"
              </h1>
            </div>
            <div className="flex items-center justify-center p-3 bg-white shadow-md rounded-br-md rounded-tl-md gap-2">
              <div>
                <Image
                  src={"/images/user-1.png"}
                  width={1000}
                  height={1000}
                  alt="User 1"
                  className="w-12 h-12 object-contain rounded-full"
                />
              </div>
              <div>
                <h2 className="text-base font-bold">Amanda K</h2>
                <span className="text-sm">Entrepreneur</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="bg-bgPrimaryLight w-full p-3 rounded-tl-md rounded-tr-md shadow-xl z-30">
              <h1 className="text-sm font-nuito font-bold text-bgSecondary">
                "As a therapist, the CapnoTrainer®GO has completely transformed
                how I work with clients. It's a game-changer in helping people
                tackle anxiety and performance issues."
              </h1>
            </div>
            <div className="flex items-center justify-center p-3 bg-white shadow-md rounded-br-md rounded-tl-md gap-2">
              <div>
                <Image
                  src={"/images/user-2.png"}
                  width={1000}
                  height={1000}
                  alt="User 1"
                  className="w-12 h-12 object-contain rounded-full"
                />
              </div>
              <div>
                <h2 className="text-base font-bold">Dr. Michael J</h2>
                <span className="text-sm">Clinical Psychologist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Success;
