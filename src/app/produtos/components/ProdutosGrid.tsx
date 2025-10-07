'use client';

import api from '@/lib/axios';
import { Produto } from '@/lib/store';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import ProdutoCard from './ProdutoCard';
import ProdutoCardSkeleton from './ProdutoCardSkeleton';
import Filter from './Filter';
import { useEffect, useState } from 'react';
import { useDebounce } from '@/app/hooks/useDebounce';

const ProdutosGrid = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, 500);

  const { data: produtos = [], isLoading } = useQuery<Produto[], Error>({
    queryKey: ['produtos', debouncedSearch],
    queryFn: async () => {
      try {
        if (debouncedSearch.trim() !== '') {
          const res = await api.post('/innova-dinamica/produtos', {
            search: debouncedSearch,
          });
          return res.data;
        }

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
      <Filter search={searchValue} setSearch={setSearchValue} />

      <p className="text-end text-xl mt-2 mb-4 font-medium">
        {produtos.length} produtos encontrados
      </p>
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
