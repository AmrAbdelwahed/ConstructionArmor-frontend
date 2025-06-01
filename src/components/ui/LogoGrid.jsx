import React from 'react';

const LogoGrid = ({ logos, title }) => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d11234] mb-8">
              {title}
            </h2>
          )}
         
          {/* Responsive grid: 1 column for single logo, 2 columns for multiple logos */}
          <div className={`grid gap-8 w-full ${logos.length === 1 ? 'grid-cols-1 place-items-center' : 'grid-cols-1 md:grid-cols-2'}`}>
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`object-contain ${logos.length === 1 ? 'max-h-32 md:max-h-40 lg:max-h-48' : 'max-h-24'} max-w-full`}
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