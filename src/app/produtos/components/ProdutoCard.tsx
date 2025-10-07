import type { Produto } from '@/lib/store';
import { limitText } from '@/utils/limitText';
import Image from 'next/image';
import React from 'react';
import ColorPicker from './ColorPicker';
import { formatPrice } from '@/utils/formatPrice';
import { FaDropbox, FaRegBookmark } from 'react-icons/fa';
import ProdutoSaveIcon from './ProdutoSaveIcon';
import useSavedProducts from '@/app/hooks/useSavedProducts';

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
  const { toggleSaveProduct, isSaved } = useSavedProducts();

  return (
    <div className="flex flex-col justify-between items-center overflow-hidden flex-grow flex-shrink basis-full md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mb-4 sm:max-w-[312px]">
      <div className="text-center">
        <h2 className="font-bold ">{limitText(produto.nome, 18)}</h2>
        <p className="mb-3">{produto.codigo}</p>
      </div>
      <div className="border-[1px] h-[585px] max-h-[585px] border-gray-400">
        <div className="relative h-[290px]">
          <ProdutoSaveIcon
            isSaved={isSaved(produto.codigo)}
            toggleSaveProduct={toggleSaveProduct}
            produtoCode={produto.codigo}
          />
          <div className="bg-[#f9f9f9] top-0 right-0 absolute p-0.5 z-10">
            <span className="uppercase text-[#26b6cd] font-bold">
              Exclusivo!
            </span>
          </div>
          <Image
            src={produto.imagem}
            alt={`Imagem do produto ${produto.nome}`}
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
          />
          <div className="absolute left-0 bottom-0 bg-white border-r-[1px] border-y-[1px] border-gray-300 h-[48px] rounded-tr-md">
            <div className="relative pe-2">
              <FaDropbox className="absolute left-0 -top-3 text-[#8EC605] text-5xl bg-white rounded-tr-md px-0.5" />
              <span className="text-gray-500 text-[12px] ps-[55px] font-bold ">
                com embalagem
                <span className="block ps-[55px]">especial</span>
              </span>
            </div>
          </div>
        </div>

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
