import React from 'react';

// Added title to the props
const LogoGrid = ({ logos, title }) => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d52b1e] mb-8">
              {title}
            </h2>
          )}
         
          {/* Grid with 4 columns on large screens, 2 on medium, 1 on small */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-24">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;