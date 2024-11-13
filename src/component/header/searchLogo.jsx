export const SearchLogo = ({ setVisibility }) => {
  const handleVisibility = () => {
    setVisibility((visibility) =>
      visibility === "block" ? "none" : "block" || visibility === ""
    );
  };

  return (
    <li className="searchLogo_list">
      <svg
        onClick={handleVisibility}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 50 50"
        style={{ cursor: "pointer" }}
      >
        <path
          fill="blueviolet"
          d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.4 37 27.5 36 30.1 34.3 L 42.4 46.6 L 46.6 42.4 L 34.5 30.3 C 36.7 27.4 38 23.9 38 20 C 38 10.6 30.4 3 21 3 Z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 Z"
        />
      </svg>
    </li>
  );
};
