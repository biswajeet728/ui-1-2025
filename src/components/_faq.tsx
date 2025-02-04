import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

let faqs = [
  {
    question:
      "Do I need prior experience with breathing exercises to use the CapnoTrainer® GO?",
    answer:
      "BreatheMatters is a holistic wellness brand dedicated to improving respiratory health and overall well-being. We offer a curated selection of innovative products designed to enhance the quality of your breathing experience.",
  },
  {
    question:
      " Is it safe to use for health conditions like asthma or anxiety?",
    answer:
      "Yes, it's ideal for understanding and improving breathing habits that exacerbate these conditions. Consult your healthcare provider if you have specific concerns.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply order your CapnoTrainer® GO, and follow the included guide to begin exploring your breath.",
  },
];

function Faq() {
  return (
    <section className="mt-20 mb-20 px-5 md:px-0">
      <div className="w-full md:w-[1000px] mx-auto">
        <div className="flex items-center justify-center mb-3">
          <h1 className="text-2xl md:text-4xl font-spectral font-bold text-center">
            FaQs
          </h1>
        </div>

        <div className="mt-3">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={String(index)}
                className="mb-4 "
              >
                <AccordionTrigger className="flex justify-between items-center p-4 bg-transparent border border-bgPrimary rounded-tl-md rounded-tr-md no-underline hover:no-underline">
                  <h1 className="text-lg font-semibold text-bgPrimary">
                    {faq.question}
                  </h1>
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-transparent border-b border-r border-l border-bgPrimary rounded-bl-md rounded-br-md">
                  <p className="text-sm text-black">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
