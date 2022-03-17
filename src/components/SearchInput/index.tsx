
interface ISearchInput {
  placeholder?: string;
  handleSearch: () => void;
}
const SearchInput = ({ handleSearch }: ISearchInput) => {
  return (
    <input
      className="search-border-color border-2 rounded-3xl px-3 w-full py-1"
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
