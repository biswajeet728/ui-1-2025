import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <section className="mt-20 mb-4">
      <div className="bg-white w-full">
        <Image
          src={"/images/banner.png"}
          width={2000}
          height={2000}
          alt="Banner"
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  );
}

export default Banner;
