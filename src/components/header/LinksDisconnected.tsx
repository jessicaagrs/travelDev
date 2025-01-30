import Link from 'next/link';

export const LinksDisconnected = () => {
  return (
    <ul className="flex items-center gap-6 text-sm">
      <li>
        <Link href="#">Meus Pedidos</Link>
      </li>
      <li>
        <Link href="#">Login</Link>
      </li>
      <li className="py-2 px-4 rounded-md bg-custom200 text-custom400 hover:bg-custom1005 shadow-md transition duration-500">
        <Link href="#">Registrar</Link>
      </li>
    </ul>
  );
};
