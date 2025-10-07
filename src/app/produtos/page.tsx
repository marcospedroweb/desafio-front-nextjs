'use client';
import React from 'react';
import { useAuthRedirect } from '../hooks/useAuthRedirect';

export default function ProdutosPage() {
  useAuthRedirect();
  return <div>Produtos</div>;
}
