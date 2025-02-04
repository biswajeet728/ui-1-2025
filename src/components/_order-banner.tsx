import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function OrderBanner() {
  return (
    <section className="mt-20 mb-20 px-5 md:px-0">
      <div className="w-full md:w-[1200px] mx-auto bg-bgSecondary p-5 relative rounded-md h-[400px] overflow-hidden">
        <div>
          <Image
            src={"/images/wave-1.png"}
            width={1000}
            height={1000}
            alt="Wave"
            className="w-24 h-24 md:w-72 md:h-72 object-contain absolute -top-24 right-0"
          />
        </div>
        {/* Smoke-like overlay effect from corners */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black opacity-30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-radial from-black/80 to-transparent"></div>
        </div>

        <div className="h-full flex flex-col items-center justify-center gap-4 relative z-10">
          <h3 className="text-2xl text-white font-semibold font-spectral uppercase">
            Don’t Wait
          </h3>
          <h1 className="text-white text-4xl font-bold font-spectral uppercase text-center">
            Transform Your Breathing Today!
          </h1>
          <p className="text-sm text-white text-center w-full md:w-[500px]">
            Your breath is your power. Take control with the CapnoTrainer® GO,
            and experience life with greater clarity, confidence, and vitality.
          </p>

          <Button className="bg-white text-bgSecondary mt-3 font-bold hover:bg-white">
             Order Now and Start Your Breathing Journey!
          </Button>
        </div>

        <div>
          <Image
            src={"/images/wave-2.png"}
            width={1000}
            height={1000}
            alt="Wave"
            className="w-24 h-24 md:w-[550px] md:h-[450px] object-contain absolute -bottom-36 left-0"
          />
        </div>
      </div>
    </section>
  );
}

export default OrderBanner;
