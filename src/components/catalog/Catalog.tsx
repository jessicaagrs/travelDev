'use client';
import Image from 'next/image';
import { useState } from 'react';

enum CatalogType {
  HOTELS,
  FLIGHTS,
  CAR_RENTAL,
}

export default function Catalog() {
  const [selected, setSelected] = useState<CatalogType>(CatalogType.HOTELS);

  const handleClick = (type: CatalogType) => {
    setSelected(type);
  };

  return (
    <section className="font-roboto flex flex-col items-center bg-custom800 my-10 mx-8 rounded-md">
      <div className="flex gap-16 py-8">
        <button
          className={`flex flex-col items-center gap-4 transition duration-500 ${selected === CatalogType.HOTELS ? "after:content-[''] after:w-16 after:h-1 after:bg-custom200 after:rounded-md" : ''}`}
          onClick={() => handleClick(CatalogType.HOTELS)}
        >
          <Image src="/hotel.svg" alt="Catalog" width={100} height={100} />
          <p>Hotéis</p>
        </button>
        <button
          className={`flex flex-col items-center gap-4 transition duration-500 ${selected === CatalogType.FLIGHTS ? "after:content-[''] after:w-16 after:h-1 after:bg-custom200 after:rounded-md" : ''}`}
          onClick={() => handleClick(CatalogType.FLIGHTS)}
        >
          <Image src="/flight.svg" alt="Catalog" width={100} height={100} />
          <p>Voos</p>
        </button>
        <button
          className={`flex flex-col items-center gap-4 transition duration-500 ${selected === CatalogType.CAR_RENTAL ? "after:content-[''] after:w-16 after:h-1 after:bg-custom200 after:rounded-md" : ''}`}
          onClick={() => handleClick(CatalogType.CAR_RENTAL)}
        >
          <Image src="/carRental.svg" alt="Catalog" width={100} height={100} />
          <p>Aluguel de Carros</p>
        </button>
      </div>
    </section>
  );
}
