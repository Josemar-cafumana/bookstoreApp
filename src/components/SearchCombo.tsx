interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
const SearchCombo = ({ query, setQuery }: Props) => {
  return (
    <select
      id="countries"
      value={query}
      onChange={(q) => setQuery(q.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
    >
      <option selected>Escolha o gênero</option>
      <option value="Fiction">Fiçção</option>
      <option value="Fantasy">Fantasia</option>
      <option value="science">Science fiction</option>
      <option value="Children">Teen</option>
    </select>
  );
};

export default SearchCombo;
