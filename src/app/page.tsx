import Catalog from '@/components/catalog/Catalog';
import Header from '@/components/header/Header';
import Posts from '@/components/posts/Posts';
import Slide from '@/components/slide/Slide';
import { Slogan } from '@/components/slogan/Slogan';

export default function Home() {
  return (
    <main>
      <Header />
      <Slide />
      <Catalog />
      <Slogan />
      <Posts />
    </main>
  );
}
