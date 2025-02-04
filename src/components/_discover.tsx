import Image from "next/image";
import React from "react";

function Discover() {
  return (
    <section className="mt-20 px-4 md:px-0">
      <h2 className="text-center text-2xl md:text-4xl mt-12 font-spectral">
        Discover the Hidden Power of Your Breath
      </h2>

      <div className="w-full mt-3 max-w-full md:max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/women.png"
              width={400}
              height={400}
              alt="Women"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="col-span-2 flex flex-col h-full">
            <div className="bg-bgPrimaryLight text-black p-7 flex flex-col justify-center flex-grow">
              <span>
                Your breathing isn’t just about oxygen in and carbon dioxide
                out—it’s a complex behavior shaped by triggers, habits, and
                physiology. When misaligned, these habits can:
              </span>

              <div className="flex flex-col gap-6 mt-4">
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/headache 1.png"
                    width={50}
                    height={50}
                    alt="Headache"
                    className="h-11 w-11 object-cover"
                  />
                  <div>
                    <strong>Compromise your health:</strong>
                    <p>Triggering anxiety, fatigue, and physical discomfort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/low-battery 1.png"
                    width={50}
                    height={50}
                    alt="Headache"
                    className="h-11 w-11 object-cover"
                  />
                  <div>
                    <strong>Disrupt your performance:</strong>
                    <p>
                      Causing focus deficits, memory issues, and suboptimal
                      endurance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/muscle-pain 1.png"
                    width={50}
                    height={50}
                    alt="Headache"
                    className="h-11 w-11 object-cover"
                  />
                  <div>
                    <strong>Exacerbate existing conditions:</strong>
                    <p>
                      Like asthma, chronic pain, and even stress-related
                      disorders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-700 text-white p-4 text-center md:text-left">
              Millions of people suffer the consequences of poor breathing
              habits. But you don’t have to be one of them. With the
              <strong> CapnoTrainer® GO</strong>, you’ll unlock a
              scientifically-backed pathway to breathing mastery.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
