'use client';
import { CatalogType } from '@/enums/enums';
import Image from 'next/image';
import { useState } from 'react';
import SelectDestination from '@/components/filters/SelectDestionation';

const servicesCatalog = [
  {
    id: 1,
    name: 'Hotéis',
    image: '/hotel.svg',
    type: CatalogType.HOTELS,
  },
  {
    id: 2,
    name: 'Voos',
    image: '/flight.svg',
    type: CatalogType.FLIGHTS,
  },
  {
    id: 3,
    name: 'Aluguel de Carros',
    image: '/carRental.svg',
    type: CatalogType.CAR_RENTAL,
  },
];

export default function Catalog() {
  const [selected, setSelected] = useState<CatalogType>(CatalogType.HOTELS);

  const handleClick = (type: CatalogType) => {
    setSelected(type);
  };

  return (
    <section className="font-roboto flex flex-col items-center bg-custom1090 shadow-md py-5 my-10 mx-8 rounded-md">
      <div className="flex gap-16 py-8">
        {servicesCatalog.map((service) => (
          <button
            key={service.id}
            className={`flex flex-col items-center gap-4 transition duration-500 ${selected === service.type ? "after:content-[''] after:w-16 after:h-1 after:bg-custom200 after:rounded-md" : ''}`}
            onClick={() => handleClick(service.type)}
          >
            <Image src={service.image} alt="Catalog" width={100} height={100} />
            <p>{service.name}</p>
          </button>
        ))}
      </div>
      <div className="flex items-center">
        <SelectDestination typeData={selected} />
      </div>
    </section>
  );
}
