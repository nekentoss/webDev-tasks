export const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Поиск фильма..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};