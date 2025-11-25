"use client";
import React, { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "What is Amazon FBA Prep?",
    answer:
      "FBA Prep ensures your products meet Amazon’s requirements before they’re sent to fulfillment centers. We handle labeling, packaging, and quality control.",
  },
  {
    id: 2,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we provide both domestic and international shipping solutions.",
  },
  {
    id: 3,
    question: "How do I get started?",
    answer:
      "Simply contact us for a free consultation, and we’ll tailor a plan to meet your needs",
  },
];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const handleFAQToggle = (id) => {
    setOpenFAQ(openFAQ === id ? 0 : id);
  };

  return (
    <section className="w-full relative z-10 bg-[#e3ebf5]">
      <main className="container mx-auto py-18 px-4 md:max-w-[80%]">
        <h1 className="md:text-center text-3xl font-bold text-slate-800">
          FAQs
        </h1>
        <p className="md:text-center text-xl pt-2 pb-10 text-slate-600">
          Need help? Check out our FAQs for quick, easy answers.
        </p>

        {/* FAQ Container */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-slate-100 last:border-b-0"
            >
              <button
                onClick={() => handleFAQToggle(item.id)}
                className="w-full flex justify-between items-center px-6 py-3 text-left hover:bg-slate-50 transition-all duration-300"
              >
                <span className="font-semibold text-lg text-slate-800">
                  {item.question}
                </span>

                {/* Animated Icon */}
                <span className="ml-4 shrink-0 text-slate-500">
                  {openFAQ === item.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === item.id
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
