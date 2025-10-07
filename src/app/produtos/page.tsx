import ProdutosGrid from './components/ProdutosGrid';
import Header from '../components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos | Innovation Brindes',
  description: 'Todos os produtos da Innovation Brindes',
};

export default function ProdutosPage() {
  return (
    <main>
      <Header />
      <ProdutosGrid />
    </main>
  );
}
