import { CatalogType } from '@/enums/enums';
import { Combobox } from './Combobox';
import { DatePicker } from './DatePicker';

type SelectDestinationProps = {
  readonly typeData: CatalogType;
};

export default function SelectDestination({
  typeData,
}: SelectDestinationProps) {
  return (
    <>
      <Combobox data="" label="Destino Inicial..." />
      <Combobox data="" label="Destino Final..." />
      <DatePicker label="Data início" />
      <DatePicker label="Data final" />
      <button className="bg-custom200 text-custom400 hover:bg-custom1005 shadow-md w-[120px] h-[36px] border-none transition duration-500">
        Buscar
      </button>
    </>
  );
}
