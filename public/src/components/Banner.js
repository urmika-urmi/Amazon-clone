import React from 'react';

const Banner = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <img
        className="w-full h-[300px] object-cover sm:h-[400px] md:h-[500px]"
        src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
        alt="Amazon Banner"
      />

      {/* Fade Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-100 to-transparent" />
    </div>
  );
};

export default Banner;
