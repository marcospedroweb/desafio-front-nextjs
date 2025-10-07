'use client';
import React from 'react';
import { useAuthRedirect } from '../hooks/useAuthRedirect';
import ListProdutos from './components/ProdutosGrid';
import Header from '../components/Header';

export default function ProdutosPage() {
  useAuthRedirect();
  return (
    <main>
      <Header />
      <ListProdutos />
    </main>
  );
}
