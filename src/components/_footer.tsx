import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <section className="mt-20 mb-20 px-5 md:px-0">
      <div className="w-full md:w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
          <div className="flex-1">
            <div className="flex flex-col gap-3">
              <Image
                src={"/images/logo.png"}
                width={1000}
                height={1000}
                alt="Logo"
                className="h-1/2 w-1/2 object-contain"
              />
              <p className="text-sm text-slate-700 w-full md:w-[350px]">
                Join us on a journey towards a healthier, balanced life – where
                each inhale and exhale contributes to your overall sense of
                wellness.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-2 ml-0 md:ml-40">
              <h1 className="text-black font-spectral text-xl font-bold">
                Contact
              </h1>
              <ul className="flex flex-col gap-1 text-sm text-slate-700">
                <li>Phone</li>
                <li>Email</li>
                <li>Location</li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div className="ml-0 md:ml-40">
              <h1 className="text-black font-spectral text-xl font-bold">
                Stay on Touch
              </h1>

              <div className="flex items-center gap-4 mt-3">
                <Image
                  src={"/images/insta.png"}
                  width={1000}
                  height={1000}
                  alt="Instagram"
                  className="w-6 h-6"
                />
                <Image
                  src={"/images/facebook.png"}
                  width={1000}
                  height={1000}
                  alt="Facebook"
                  className="w-6 h-6"
                />
                <Image
                  src={"/images/twitter.png"}
                  width={1000}
                  height={1000}
                  alt="Twitter"
                  className="w-6 h-6"
                />
                <Image
                  src={"/images/discord.png"}
                  width={1000}
                  height={1000}
                  alt="Discord"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          @2024 BreatheMatters all rights reserved
        </div>
      </div>
    </section>
  );
}

export default Footer;
