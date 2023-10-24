import styled from "styled-components";
import { useState } from "react";

const ComponentContainer = styled.div`
  display: flex;
  height: 3rem;
  margin: 1.2rem 2rem;
  padding: 0 2rem;
`;
const SearchInput = styled.input`
  flex: 8;
  background-color: transparent;
  border: 1.5px solid #69433a;
  border-radius: 1.5rem;
  padding-left: 1.3rem;
  
  &:focus {
    outline: none;
    }
`;
const SearchButon = styled.button`
  flex: 1;
  color: #fff;
  font-size: 1rem;
  background-color: #69433a;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  
  &:hover {
    background-color: #C33740;
  }
`;

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <ComponentContainer>
      <SearchInput
        type="text"
        placeholder="책이름, 저자로 검색할 수 있습니다"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButon onClick={handleSearch}>검색</SearchButon>
    </ComponentContainer>
  );
}

export default SearchBar;
