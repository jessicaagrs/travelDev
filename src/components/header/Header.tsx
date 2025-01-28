import { LinksDisconnected } from './LinksDisconnected';
import { Logo } from './Logo';
import { MenuIcon } from './MenuIcon';
import { SearchHeader } from './SearchHeader';

export default function Header() {
  return (
    <nav className="bg-custom100 text-custom400 flex justify-between items-center p-4 font-poppins">
      <Logo />
      <div className="flex items-center gap-12 font-roboto">
        <SearchHeader />
        <LinksDisconnected />
        <button title="Menu icon">
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}
