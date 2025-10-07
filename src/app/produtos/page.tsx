'use client';
import React from 'react';
import { useAuthRedirect } from '../hooks/useAuthRedirect';
import ProdutosGrid from './components/ProdutosGrid';
import Header from '../components/Header';

export default function ProdutosPage() {
  useAuthRedirect();
  return (
    <main>
      <Header />
      <ProdutosGrid />
    </main>
  );
}
