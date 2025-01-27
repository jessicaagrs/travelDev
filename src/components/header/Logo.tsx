import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      <Link href="/" className="text-xl font-medium">
        TravelDev
      </Link>
    </div>
  );
};
