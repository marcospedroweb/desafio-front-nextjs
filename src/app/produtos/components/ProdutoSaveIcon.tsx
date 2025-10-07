import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

interface ProdutoSaveIconProps {
  produtoCode: string;
  toggleSaveProduct: (codigo: string) => void;
  isSaved: boolean;
}

const ProdutoSaveIcon = ({
  produtoCode,
  toggleSaveProduct,
  isSaved,
}: ProdutoSaveIconProps) => {
  return (
    <div
      className="top-2 left-2 absolute p-0.5 z-10 cursor-pointer"
      onClick={() => toggleSaveProduct(produtoCode)}
    >
      {isSaved ? (
        <FaBookmark className="text-xl" />
      ) : (
        <FaRegBookmark className="text-xl" />
      )}
    </div>
  );
};

export default ProdutoSaveIcon;
