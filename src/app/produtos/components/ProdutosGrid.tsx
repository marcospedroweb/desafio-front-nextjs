'use client';

import api from '@/lib/axios';
import { Produto } from '@/lib/store';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import ProdutoCard from './ProdutoCard';
import ProdutoCardSkeleton from './ProdutoCardSkeleton';
import Filter from './Filter';
import { useEffect, useMemo, useState } from 'react';
import { useDebounce } from '@/app/hooks/useDebounce';

const ProdutosGrid = () => {
  const [searchValue, setSearchValue] = useState('');
  const [order, setOrder] = useState('');
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

  const sortedProdutos = useMemo(() => {
    const sorted = [...produtos];

    if (order === 'price_asc') {
      sorted.sort((a, b) => Number(a.preco) - Number(b.preco));
    } else if (order === 'price_desc') {
      sorted.sort((a, b) => Number(b.preco) - Number(a.preco));
    } else if (order === 'name_asc') {
      sorted.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (order === 'name_desc') {
      sorted.sort((a, b) => b.nome.localeCompare(a.nome));
    }

    return sorted;
  }, [produtos, order]);

  return (
    <div className="max-w-10/12 mx-auto">
      <Filter
        search={searchValue}
        setSearch={setSearchValue}
        order={order}
        setOrder={setOrder}
      />

      <p className="text-end text-xl mt-2 mb-4 font-medium">
        {produtos.length} produtos encontrados
      </p>
      <div className="flex justify-between items-start flex-wrap gap-5">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <ProdutoCardSkeleton key={i} />
            ))
          : sortedProdutos.map((produto) => (
              <ProdutoCard key={produto.codigo} produto={produto} />
            ))}
      </div>
    </div>
  );
};

export default ProdutosGrid;
