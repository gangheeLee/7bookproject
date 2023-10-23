import React, { useState, useEffect } from "react";
import PageContainer from "../bookreqlist/PageContainer";
import PageContentTitle from "../bookreqlist/PageContentTitle";
import Divider from "../bookreqlist/Divider";
import SearchBar from "../bookreqlist/SearchBar";
import BookCardContainer from "../bookreqlist/BookCardContainer";
import BookCard from "../bookreqlist/BookCard";
import { booklist } from "../data/books";

function BookRequestListPage() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredSeachResults = booklist.filter(
      ({ title, author }) =>
        title.includes(searchText) || author.includes(searchText)
    );
    setSearchResults(filteredSeachResults);
  }, [searchText]);

  const handleSearch = (searchTerm) => {
    // 여기에서 실제 검색 작업을 수행하고 검색 결과를 setSearchResults로 업데이트합니다.
    // 예: 검색 결과를 가져오는 API 호출 또는 데이터 필터링 등을 수행할 수 있습니다.
    // 이 예제에서는 간단히 검색어를 콘솔에 출력합니다.
    console.log("검색어:", searchTerm);
    setSearchText(searchTerm);
  };

  return (
    <PageContainer>
      <Divider />
      <PageContentTitle>구매 요청 도서</PageContentTitle>
      <SearchBar onSearch={handleSearch} />
      <BookCardContainer>
        {searchResults.map((searchResult) => {
          return <BookCard key={searchResult.id} book={searchResult} />;
        })}
      </BookCardContainer>
      <Divider />
    </PageContainer>
  );
}

export default BookRequestListPage;
