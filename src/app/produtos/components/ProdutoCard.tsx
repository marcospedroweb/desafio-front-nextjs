import type { Produto } from '@/lib/store';
import { limitText } from '@/utils/limitText';
import Image from 'next/image';
import React from 'react';
import ColorPicker from './ColorPicker';
import { formatPrice } from '@/utils/formatPrice';

const ProdutoCard = ({ produto }: { produto: Produto }) => {
  const colorsPicker = [
    '#7d2e27',
    '#32619d',
    '#4b5d74',
    '#5a9ec1',
    '#7fbb02',
    '#424242',
    '#eeeeee',
    '#8a2b0f',
    '#64f735',
    '#0fe8b8',
    '#5a9ec0',
    '#ff6100',
    '#ffaf01',
    '#2e1e41',
  ];

  return (
    <div className="flex flex-col justify-between items-center overflow-hidden max-w-[225px] w-full mb-4">
      <div className="text-center">
        <h2 className="font-bold ">{limitText(produto.nome, 18)}</h2>
        <p className="mb-3">{produto.codigo}</p>
      </div>
      <div className="border-[1px] h-[585px] max-h-[585px] border-gray-400">
        <Image
          src={produto.imagem}
          width={233}
          height={290}
          alt={`Imagem do produto ${produto.nome}`}
        />
        <div className="p-2 flex flex-wrap justify-between flex-1 gap-4">
          <p className="mb-2 min-h-[72px]">{limitText(produto.descricao)}</p>
          <div className="flex flex-col justify-end">
            <p>Cores:</p>
            <ColorPicker colors={colorsPicker} />
            <div className="flex flex-col justify-end items-end">
              <p>a partir de</p>
              <p className="font-bold text-xl text-gray-700">
                {formatPrice(produto.preco)}
              </p>
              <p>gerado pela melhor oferta</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="uppercase py-1 bg-[#8EC605] font-bold w-full mt-2 text-white cursor-pointer">
          Confira
        </button>
      </div>
    </div>
  );
};

export default ProdutoCard;
