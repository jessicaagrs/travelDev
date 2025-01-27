'use client';
import { ArrowLeft } from '@/components/global/ArrowLeft';
import { ArrowRight } from '@/components/global/ArrowRight';
import { useState } from 'react';

export default function Slide() {
  const [numberImg, setNumberImg] = useState(1);

  const handleNextImage = () => {
    setNumberImg((prev) => (prev === 4 ? 1 : prev + 1));
  };

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(/local${numberImg}.jpg)`,
        }}
        className={`h-96 bg-center bg-cover bg-no-repeat flex justify-between items-center transition duration-500`}
      >
        <button
          title="forward left button"
          className="rounded-full bg-white ml-2 w-10 h-10 border-none flex justify-center items-center hover:bg-custom700 hover:text-custom400 transition duration-500"
          onClick={handleNextImage}
        >
          <ArrowLeft />
        </button>
        <button
          title="forward right button"
          className="rounded-full bg-white mr-2 w-10 h-10 border-none flex justify-center items-center hover:bg-custom700 hover:text-custom400 transition duration-500"
          onClick={handleNextImage}
        >
          <ArrowRight />
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-2 absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <button
          title="next image button"
          className={`w-8 h-3 ${numberImg === 1 ? 'bg-custom700' : 'bg-custom400'} rounded-lg hover:bg-custom700 transition duration-500`}
          onClick={() => setNumberImg(1)}
        ></button>
        <button
          title="next image button"
          className={`w-8 h-3 ${numberImg === 2 ? 'bg-custom700' : 'bg-custom400'} rounded-lg hover:bg-custom700 transition duration-500`}
          onClick={() => setNumberImg(2)}
        ></button>
        <button
          title="next image button"
          className={`w-8 h-3 ${numberImg === 3 ? 'bg-custom700' : 'bg-custom400'} rounded-lg hover:bg-custom700 transition duration-500`}
          onClick={() => setNumberImg(3)}
        ></button>
        <button
          title="next image button"
          className={`w-8 h-3 ${numberImg === 4 ? 'bg-custom700' : 'bg-custom400'} rounded-lg hover:bg-custom700 transition duration-500`}
          onClick={() => setNumberImg(4)}
        ></button>
      </div>
    </div>
  );
}
