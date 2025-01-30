import Link from 'next/link';

export const LinksConnected = () => {
  return (
    <ul>
      <li>
        <Link href="#">Minha Conta</Link>
      </li>
      <li>
        <Link href="#">Meus Pedidos</Link>
      </li>
      <li>
        <Link href="#">Formas de Pagamento</Link>
      </li>
      <li>
        <Link href="#">Reembolsos</Link>
      </li>
      <li>
        <Link href="#">Central de Ajuda</Link>
      </li>
      <li>
        <Link href="#">Sair</Link>
      </li>
    </ul>
  );
};
