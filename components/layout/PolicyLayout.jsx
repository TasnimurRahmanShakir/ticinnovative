import React from "react";

const PolicyLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="bg-bg-one min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <header className="mb-10 md:mb-14 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-gray-500 text-sm md:text-base">
              Last Updated: {lastUpdated}
            </p>
          )}
          <div className="w-20 h-1 bg-linear-to-r from-gradient-start to-gradient-end mx-auto mt-6 rounded-full"></div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-primary prose-a:text-gradient-start hover:prose-a:text-gradient-end prose-strong:text-primary">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PolicyLayout;
