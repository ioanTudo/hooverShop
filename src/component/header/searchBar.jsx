export const SearchBar = ({ visibility }) => {
  return (
    <li style={{ display: visibility }} className="searchBar_list">
      <input className="searchBar_header" type="text" placeholder="Search..." />
    </li>
  );
};
