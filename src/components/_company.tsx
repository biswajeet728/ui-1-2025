import Image from "next/image";
import React from "react";

function Company() {
  return (
    <section className="w-full mt-20 container mx-auto px-4 md:px-0">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {/* Company Logos - Centered */}
        {[
          "company-1.png",
          "company-2.png",
          "company-3.png",
          "company-4.png",
        ].map((company, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={`/images/${company}`}
              width={200} // Adjusted for better scaling
              height={200}
              alt={`Company ${index + 1}`}
              className="w-2/3 sm:w-1/2 object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Company;
