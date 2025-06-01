import React from 'react';

const ThreeImages = ({ image1, image2, image3 }) => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="w-full flex flex-col md:flex-row">
        {/* Image 1 */}
        {image1 && (
          <div className="flex-1 group relative overflow-hidden">
            <img
              src={image1}
              alt="Security Guard 1"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              style={{ aspectRatio: '16/9' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}

        {/* Image 2 */}
        {image2 && (
          <div className="flex-1 group relative overflow-hidden">
            <img
              src={image2}
              alt="Security Guard 2"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              style={{ aspectRatio: '16/9' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}

        {/* Image 3 */}
        {image3 && (
          <div className="flex-1 group relative overflow-hidden">
            <img
              src={image3}
              alt="Security Guard 3"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              style={{ aspectRatio: '16/9' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreeImages;