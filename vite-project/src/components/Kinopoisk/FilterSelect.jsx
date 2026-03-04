export const FilterSelect = ({ value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Все рейтинги</option>
      <option value="7">7+</option>
      <option value="8">8+</option>
      <option value="9">9+</option>
    </select>
  );
};