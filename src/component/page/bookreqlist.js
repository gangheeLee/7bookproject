import React, { useState, useEffect } from "react";
import PageContainer from "../bookreqlist/PageContainer";
import PageContentTitle from "../bookreqlist/PageContentTitle";
import Divider from "../bookreqlist/Divider";
import SearchBar from "../bookreqlist/SearchBar";
import BookCardContainer from "../bookreqlist/BookCardContainer";
import BookCard from "../bookreqlist/BookCard";
import { booklist } from "../data/books";
import styled from "styled-components";

const OrderByContainer = styled.div`
  color: #774836;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`
const OrderByButton = styled.div`
  margin: 0 0.5rem;
`

function BookRequestListPage() {
  const [AscOrderByValue, setAscOrderbyValue] = useState("title");
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredSeachResults = booklist.filter(({ title, author }) => {
      const replacedSearchText = searchText.replace(' ', '')
      return title.replaceAll(' ', '').includes(replacedSearchText) || author.replaceAll(' ', '').includes(replacedSearchText)
    });
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
      <OrderByContainer>
        {/* 버튼 클릭하면 책제목/저자 가다다순으로 정렬 */}
        <OrderByButton
          onClick={() => { setAscOrderbyValue('title'); }}
          style={{            
            cursor: 'pointer',
            fontWeight: AscOrderByValue === 'title' ? '700' : '400'
          }}
        >
          책제목 (가나다순)
        </OrderByButton>
          |
        <OrderByButton
          onClick={() => { setAscOrderbyValue('author'); }}
          style={{
            cursor: 'pointer',
            fontWeight: AscOrderByValue === 'author' ? '700' : '400'
          }}
        >
          저자 (가나다순)
        </OrderByButton>

      </OrderByContainer>
      <BookCardContainer>       
         {searchResults
          .sort((a, b) => {
            const aValue = a[AscOrderByValue];
            const bValue = b[AscOrderByValue];
            return aValue > bValue ? 1 : (aValue < bValue ? -1 : 0)
          })
          .map((searchResult) => {
            return (
              <BookCard
                key={searchResult.id}
                book={searchResult}
              />
            );
          })
        }
      </BookCardContainer>
      <Divider />
    </PageContainer>
  );
}

export default BookRequestListPage;
