interface ProdutosPaginationProps {
  actualPage: number;
  setActualPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const ProdutosPagination = ({
  actualPage,
  setActualPage,
  totalPages,
}: ProdutosPaginationProps) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center gap-2 mt-8 select-none">
      {actualPage > 1 && (
        <button
          onClick={() => setActualPage(actualPage - 1)}
          className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-sm"
        >
          Anterior
        </button>
      )}

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          const isActive = page === actualPage;

          return (
            <button
              key={i}
              onClick={() => setActualPage(page)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition 
                ${
                  isActive
                    ? 'bg-[#8EC605] text-white hover:bg-[#8EC605]'
                    : 'border border-gray-300 hover:bg-gray-100'
                }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {actualPage < totalPages && (
        <button
          onClick={() => setActualPage(actualPage + 1)}
          className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-sm"
        >
          Próximo
        </button>
      )}
    </div>
  );
};

export default ProdutosPagination;
