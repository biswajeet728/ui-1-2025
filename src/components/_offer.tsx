import Image from "next/image";
import React from "react";

function Offer() {
  return (
    <section className="mt-20">
      <div className="w-full md:w-[1050px] mx-auto">
        <div className="flex items-center justify-center mb-3">
          <h1 className="text-2xl md:text-4xl font-spectral font-bold text-center">
            What Can the CapnoTrainer®GO Do for You?
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-4 mt-5 h-full">
          {[
            {
              image: "/images/offer-1.png",
              title: "Eliminate Stress and Anxiety",
              text: "Learn to control overbreathing, reduce hypocapnia, and maintain balance even in challenging situations.",
            },
            {
              image: "/images/offer-2.png",
              title: "Enhance Mental Clarity and Focus",
              text: "Boost oxygen and glucose supply to your brain by aligning your breathing mechanics.",
            },
            {
              image: "/images/offer-3.png",
              title: "Achieve Peak Performance",
              text: "Whether you’re giving a presentation, running a marathon, or meditating, experience the benefits of a well-aligned breath.",
            },
            {
              image: "/images/offer-4.png",
              title: "Improve Physical Health",
              text: "Address symptoms like shortness of breath, dizziness, and fatigue by optimizing your acid-base physiology.",
            },
          ].map((offer, index) => (
            <div
              key={index}
              className="w-full flex flex-col h-full items-center md:items-start"
            >
              {/* Image */}
              <Image
                src={offer.image}
                width={1000}
                height={1000}
                alt={offer.title}
                className="object-cover"
              />

              {/* Content - Flex Grow ensures equal height */}
              <div className="bg-bgSecondary p-3 -mt-2 w-full flex flex-col flex-grow rounded-br-md rounded-bl-md">
                <h1 className="text-white text-lg font-semibold">
                  {offer.title}
                </h1>
                <p className="mt-2 text-sm text-slate-300">{offer.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offer;
