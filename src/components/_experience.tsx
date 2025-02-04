import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

function Experience() {
  return (
    <article className="bg-bgPrimaryLight h-full pb-0">
      <div className="w-full md:w-[1000px] mx-auto flex flex-col">
        <section className="h-full mt-7 px-5 md:px-0">
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <h3 className="text-black font-medium text-xl font-spectral">
                Experience the
              </h3>
              <h1 className="text-2xl md:text-4xl text-bgSecondary font-spectral font-semibold">
                Power of CapnoTrainer® GO
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 items-center place-content-center mt-6 gap-5">
            <div className="flex-1">
              <Card className="rounded-sm">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    <div className="flex-1 h-full">
                      <Image
                        src={"/images/pic-1.png"}
                        width={1000}
                        height={1000}
                        alt="Pic 1"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 bg-bgPrimaryLight shadow-lg">
                      <h3 className="text-bgSecondary font-bold">
                        See Your Breathing in Action
                      </h3>

                      <p className="mt-2 text-sm">
                        Gain an immediate understanding of your breathing
                        patterns. See how each breath impacts your health and
                        performance with clear, dynamic visuals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1">
              <Card className="rounded-sm">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    <div className="flex-1 h-full">
                      <Image
                        src={"/images/pic-2.png"}
                        width={1000}
                        height={1000}
                        alt="Pic 3"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 bg-bgPrimaryLight shadow-lg -mt-2">
                      <h3 className="text-bgSecondary font-bold">
                        Monitor Your Progress
                      </h3>

                      <p className="mt-2 text-sm">
                        Track your breathing efficiency over time. By measuring
                        your CO2 levels, the CapnoTrainer® GO provides real-time
                        data to help you optimize your respiration.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1">
              <Card className="rounded-sm">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    <div className="flex-1 h-full">
                      <Image
                        src={"/images/pic-3.png"}
                        width={1000}
                        height={1000}
                        alt="Pic 3"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 bg-bgPrimaryLight shadow-lg mt-auto">
                      <h3 className="text-bgSecondary font-bold">
                        Receive Tailored Feedback
                      </h3>

                      <p className="mt-2 text-sm">
                        Get personalized feedback to improve your breathing.
                        Practical exercises help realign your breath for optimal
                        benefits. Receive instant feedback to help you breathe
                        smarter.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center md:items-start md:justify-start">
            <Image
              src={"/images/wave-2.png"}
              width={1000}
              height={1000}
              alt="Wave"
              className="w-fit h-20 object-cover"
            />
          </div>
        </section>
        <section className="mt-5 px-5 md:px-0">
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="flex-[1] bg-bgPrimaryLight">
              <h1 className="text-2xl md:text-3xl static text-center md:text-left md:absolute top-12 font-semibold font-spectral">
                How the CapnoTrainer® GO Works
              </h1>

              <div className="static md:absolute top-28 w-full md:w-[600px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="w-full bg-bgSecondary p-3 bg-opacity-80 rounded-md shadow-md">
                    <h2 className="text-white font-semibold font-nuito">
                      Measure What Matters
                    </h2>
                    <p className="text-[13px] text-white mt-2">
                      Monitor your End-Tidal CO2 (PetCO2) in real time to assess
                      how effectively your breathing supports acid-base balance
                      and health.
                    </p>
                  </div>
                  <div className="flex-1 bg-bgSecondary p-3 bg-opacity-80 rounded-md shadow-md">
                    <h2 className="text-white font-semibold font-nuito">
                      Visualize Your Breathing
                    </h2>
                    <p className="text-[13px] text-white mt-2">
                      See your breathing habits on a capnogram, a dynamic
                      display of your inhalation and exhalation patterns.
                      Pinpoint issues like overbreathing, gasps, or shallow
                      breaths.
                    </p>
                  </div>
                  <div className="flex-1 bg-bgSecondary p-3 bg-opacity-80 rounded-md shadow-md">
                    <h2 className="text-white font-semibold font-nuito">
                      Customized Interventions
                    </h2>
                    <p className="text-[13px] text-white mt-2">
                      Based on your unique breathing habits, receive tailored
                      exercises and interventions to dismantle bad habits and
                      cultivate optimal ones.
                    </p>
                  </div>
                  <div className="flex-1 bg-bgSecondary p-3 bg-opacity-80 rounded-md shadow-md">
                    <h2 className="text-white font-semibold font-nuito">
                      Engage in Practicums
                    </h2>
                    <p className="text-[13px] text-white mt-2">
                      Explore playful self-intervention techniques to realign
                      breathing mechanics with your body’s needs—whether through
                      nose-breathing challenges or CO2 biofeedback training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-[1.5] w-[400px] h-[400px] bg-cover bg-no-repeat bg-left-top"
              style={{
                backgroundImage: `url("/images/bg.png")`,
              }}
            ></div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Experience;
