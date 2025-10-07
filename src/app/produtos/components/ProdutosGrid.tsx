'use client';

import api from '@/lib/axios';
import { Produto } from '@/lib/store';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import ProdutoCard from './ProdutoCard';
import ProdutoCardSkeleton from './ProdutoCardSkeleton';

const ProdutosGrid = () => {
  const { data: produtos = [], isLoading } = useQuery<Produto[], Error>({
    queryKey: ['produtos'],
    queryFn: async () => {
      try {
        const res = await api.get('/innova-dinamica/produtos');
        return res.data;
      } catch (error: unknown) {
        let message = 'Erro desconhecido';

        if (error instanceof Error) {
          message = error.message;
        }

        toast.error(message);
        throw error;
      }
    },
  });

  return (
    <div className="max-w-10/12 mx-auto">
      <div>filters</div>
      <div className="flex justify-between items-start flex-wrap gap-5">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <ProdutoCardSkeleton key={i} />
            ))
          : produtos.map((produto) => (
              <ProdutoCard key={produto.codigo} produto={produto} />
            ))}
      </div>
    </div>
  );
};

export default ProdutosGrid;
