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
import ProdutosPagination from './ProdutosPagination';

const ProdutosGrid = () => {
  const [searchValue, setSearchValue] = useState('');
  const [order, setOrder] = useState('');
  const debouncedSearch = useDebounce(searchValue, 500);
  const [actualPage, setActualPage] = useState<number>(1);

  const itemsPerPage = 10;

  const { data: produtos = [], isLoading } = useQuery<Produto[], Error>({
    queryKey: ['produtos', debouncedSearch],
    queryFn: async () => {
      try {
        const response =
          debouncedSearch.trim() !== ''
            ? await api.post('/innova-dinamica/produtos', {
                search: debouncedSearch,
              })
            : await api.get('/innova-dinamica/produtos');
        return response.data;
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : 'Erro desconhecido';
        toast.error(message);
        throw error;
      }
    },
  });

  const sortedProdutos = useMemo(() => {
    const sorted = [...produtos];

    switch (order) {
      case 'price_asc':
        sorted.sort((a, b) => Number(a.preco) - Number(b.preco));
        break;
      case 'price_desc':
        sorted.sort((a, b) => Number(b.preco) - Number(a.preco));
        break;
      case 'name_asc':
        sorted.sort((a, b) => a.nome.localeCompare(b.nome));
        break;
      case 'name_desc':
        sorted.sort((a, b) => b.nome.localeCompare(a.nome));
        break;
    }

    return sorted;
  }, [produtos, order]);

  const totalPages = Math.ceil(sortedProdutos.length / itemsPerPage);

  useEffect(() => {
    setActualPage(1);
  }, [debouncedSearch, order]);

  useEffect(() => {
    if (actualPage > totalPages && totalPages > 0) {
      setActualPage(totalPages);
    }
  }, [actualPage, totalPages]);

  const paginatedProdutos = useMemo(() => {
    const startIndex = (actualPage - 1) * itemsPerPage;
    return sortedProdutos.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedProdutos, actualPage]);

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
          : paginatedProdutos.map((produto) => (
              <ProdutoCard key={produto.codigo} produto={produto} />
            ))}
      </div>
      <div>
        {totalPages > 1 && (
          <div className="mt-8 mb-12 flex justify-center">
            <ProdutosPagination
              actualPage={actualPage}
              setActualPage={setActualPage}
              totalPages={totalPages}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProdutosGrid;
