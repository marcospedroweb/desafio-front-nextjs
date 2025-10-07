import Input from '@/app/components/Input';

interface FilterProps {
  search: string;
  setSearch: (value: string) => void;
}

const Filter = ({ search, setSearch }: FilterProps) => {
  return (
    <div className="mt-6 w-full">
      <div className="w-full flex justify-between items-center">
        <Input
          text="Nome do produto ou código"
          classNameInput="!w-8/12 !py-3 border !mb-0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="w-3/12 bg-white py-3 px-1 rounded-full border">
          <option value="">Ordernar por:</option>
          <option value="">Preço crescente</option>
          <option value="">Preço decrescente</option>
          <option value="">Nome A-Z</option>
          <option value="">Nome Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
