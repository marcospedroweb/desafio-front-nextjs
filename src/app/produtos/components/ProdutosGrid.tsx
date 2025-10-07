'use client';

import api from '@/lib/axios';
import { Produto } from '@/lib/store';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProdutosGrid = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await api.get('/innova-dinamica/produtos');
      return res.data;
    },
    onSuccess: (data) => {
      setProdutos(data);
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  return <div>ListProdutos</div>;
};

export default ProdutosGrid;
