'use client';
import { ArrowLeft } from '@/components/global/ArrowLeft';
import { ArrowRight } from '@/components/global/ArrowRight';
import { useState } from 'react';

const slideButtons = [
  {
    id: 1,
    code: 1,
  },
  {
    id: 2,
    code: 2,
  },
  {
    id: 3,
    code: 3,
  },
  {
    id: 4,
    code: 4,
  },
];

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
        {slideButtons.map((button) => (
          <button
            key={button.id}
            title={`next image button ${button.code}`}
            className={`w-8 h-3 ${numberImg === button.code ? 'bg-custom700' : 'bg-custom400'} rounded-lg hover:bg-custom700 transition duration-500`}
            onClick={() => setNumberImg(button.code)}
          ></button>
        ))}
      </div>
    </div>
  );
}
