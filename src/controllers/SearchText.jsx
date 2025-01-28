import { useState } from "react";

const mockData = ["React", "Vue", "Angular", "Svelte"];

const SearchText = () => {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setTimeout(() => {
      const found = mockData.includes(searchInput);
      setResult(found ? `결과: ${searchInput}` : "존재하지 않습니다");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="searchTextWrapper">
      <div className="searchBox">
        <input
          className="searchTextInput"
          type="text"
          placeholder="검색어 입력"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="searchButton" onClick={handleSearch}>
          {loading ? "검색중.." : "검색"}
        </button>
      </div>
      {result && <div className="searchResult">{result}</div>}
    </div>
  );
};

export default SearchText;
