import Input from '@/app/components/Input';

interface FilterProps {
  search: string;
  setSearch: (value: string) => void;
  order: string;
  setOrder: (value: string) => void;
}

const Filter = ({ search, setSearch, order, setOrder }: FilterProps) => {
  return (
    <div className="mt-6 w-full">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <Input
          text="Nome do produto ou código"
          classNameDiv="mb-3 sm:mb-0"
          classNameInput="!w-full sm:!w-8/12 !py-3 border !mb-0 "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-8/12 sm:w-3/12 bg-white py-3 px-1 rounded-full border"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="">Ordernar por:</option>
          <option value="price_asc">Preço crescente</option>
          <option value="price_desc">Preço decrescente</option>
          <option value="name_asc">Nome A-Z</option>
          <option value="name_desc">Nome Z-A</option>
          <option value="favorites">Favoritos</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
