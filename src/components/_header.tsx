import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="bg-bgPrimary h-auto md:h-[500px]">
      <div className="container mx-auto flex items-center justify-between p-4 md:p-0">
        <div className="h-16 w-32 md:h-20 md:w-44">
          <Image
            src={"/images/logo.png"}
            width={1000}
            height={1000}
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </div>

        <Button className="bg-bgSecondary hover:bg-bgSecondary">
          Book Now
        </Button>
      </div>

      <article className="container mx-auto relative p-4 md:p-0">
        <div className="relative">
          <h1 className="text-white text-2xl md:text-4xl tracking-wider leading-[30px] md:leading-[50px] font-semibold font-spectral">
            Transform Your Life with the Revolutionary <br /> CapnoTrainer® GO
          </h1>

          <Image
            src={"/images/wave-1.png"}
            width={1000}
            height={1000}
            alt="Wave"
            className="w-24 h-24 md:w-44 md:h-44 object-scale-down absolute -bottom-8 md:-bottom-16 left-[250px] md:left-[350px]"
          />
        </div>
        <div className="mb-5">
          <h2 className="mt-8 md:mt-12 text-white font-nuito text-xl md:text-3xl">
            Breathe Smarter, Live Better
          </h2>
          <p className="text-white text-sm mt-1 w-full md:w-[600px]">
            Breathing is more than just an unconscious action—it’s a foundation
            of health, performance, and emotional well-being. But what if your
            breathing habits are silently holding you back? Enter the
            CapnoTrainer® GO, the groundbreaking tool that merges science,
            psychology, and technology to revolutionize your breathing habits
            and transform your life.
          </p>
        </div>
        <div className="mt-5 block md:hidden">
          <Image
            src={"/images/book.png"}
            width={1000}
            height={1000}
            alt="Book"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute -top-20 -right-6 z-30 hidden md:block">
          <Image
            src={"/images/book.png"}
            width={1000}
            height={1000}
            alt="Book"
            className="w-[320px] h-[350px] md:w-[520px] md:h-[650px] object-contain"
          />
        </div>
      </article>

      <div className="bg-gradient-to-b from-teal-700 to-[#001A1A] h-[100px] md:h-[150px] w-full overflow-hidden! inset-0 bg-opacity-65 hidden md:block"></div>
    </header>
  );
}

export default Header;
