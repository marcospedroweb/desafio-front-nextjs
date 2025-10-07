'use client';

import type { Produto } from '@/lib/store';
import { formatPrice } from '@/utils/formatPrice';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ColorPicker from './ColorPicker';

interface BtnShowProdutoProps {
  produto: Produto;
}

const BtnShowProduto = ({ produto }: BtnShowProdutoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  return (
    <>
      <button
        className="uppercase py-1 bg-[#8EC605] font-bold w-full mt-2 text-white cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Confira
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg max-w-lg w-full p-6 relative"
          >
            <button
              ref={closeButtonRef}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar modal"
            >
              <FaTimes size={20} />
            </button>

            <h2 id="modal-title" className="text-2xl font-bold">
              {produto.nome}
            </h2>
            <p className="mb-4">Código: {produto.codigo}</p>
            <div className="relative w-full h-64 sm:h-80 border mb-2">
              <Image
                src={produto.imagem}
                alt={produto.nome}
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-2">{produto.descricao}</p>

            <div className="mb-5">
              <p>Cores:</p>
              <ColorPicker />
            </div>

            <p className="mb-2 font-bold text-end text-2xl">
              {formatPrice(produto.preco)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BtnShowProduto;
