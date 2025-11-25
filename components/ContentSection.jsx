import React from "react";

const ContentSection = ({ title, problems, solution }) => {
  return (
    <section className="w-full bg-white py-16 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          {title}
        </h2>

        {problems && problems.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {problems.map((problem, index) => (
              <span
                key={index}
                className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium text-lg"
              >
                {problem}
              </span>
            ))}
          </div>
        )}

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          {solution}
        </p>
      </div>
    </section>
  );
};

export default ContentSection;
