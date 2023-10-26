import React from 'react';
import styled from 'styled-components';

const ComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;
const BookImageContainer = styled.div`
  flex: 1;
  margin: 0.4rem;
`;
const BookImage = styled.img`
  max-width: 100%;
  height: auto;
  background-color: #fff;
`;
const BookInfoContainer = styled.div`
  flex: 4;
  margin: 0.3rem;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
const BookInfoContainerHeader = styled.div`
  font-size: 1.2rem;
`;
const BookInfoContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BookInfoLeftContainer = styled.div`
  flex: 3;
  margin: 0.4rem 0.4rem 0.4rem 0;
  padding-right: 1.3rem;
`;
const BookInfoRightContainer = styled.div`
  flex: 2;
  margin: 0.4rem;
`;
const BookInfoLabel = styled.div`
  margin-top: 0.5rem;
`;
const BookInfoText = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 0.2rem 0;
  padding: 0.2rem 0.2rem 0.2rem 0.4rem;
`;
const BookPriceInfoTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
`
const BookPriceInfo = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 0.2rem 0.2rem 0.2rem 0.7rem;
  padding: 0.2rem 0.2rem 0.2rem 0.4rem;
`
const BookQualityRow = styled.div`
  display: flex;
`;
const BookPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.4rem;  
`;
const BookPriceHeader = styled.div`
  color: #999;
`;
const BookPriceText = styled.div`
  color: #999;
`;

function BookDetailForm({ book }) {

  return (
    <ComponentContainer>
      <BookImageContainer>
        <BookImage src={book.imageSrc} alt={book.title} />
      </BookImageContainer>
      <BookInfoContainer>
        <BookInfoContainerHeader>
          책 정보
        </BookInfoContainerHeader>
        <BookInfoContainerBody>
          <BookInfoLeftContainer>
            <BookInfoLabel>제목</BookInfoLabel>
            <BookInfoText>{book.title}</BookInfoText>
            <BookInfoLabel>저자</BookInfoLabel>
            <BookInfoText>{book.author}</BookInfoText>
            <BookInfoLabel>출판사</BookInfoLabel>
            <BookInfoText>{book.publisher}</BookInfoText>
          </BookInfoLeftContainer>
          <BookInfoRightContainer>
            <BookInfoLabel>희망도서상태</BookInfoLabel>
            <BookQualityRow>
              <input type='checkbox' checked={book.quality === 'top'} />
              <BookInfoText>최상</BookInfoText>
            </BookQualityRow>
            <BookQualityRow>
              <input type='checkbox' checked={book.quality === 'high'} />
              <BookInfoText>상</BookInfoText>
            </BookQualityRow>
            <BookQualityRow>
              <input type='checkbox' checked={book.quality === 'medium'} />
              <BookInfoText>중</BookInfoText>
            </BookQualityRow>
            <BookQualityRow>
              <input type='checkbox' checked={book.quality === 'low'} />
              <BookInfoText>하</BookInfoText>
            </BookQualityRow>
            <BookInfoLabel>입찰 시작가</BookInfoLabel>
            <BookPriceInfoTextContainer>
            <BookPriceInfo>{book.priceStart.toLocaleString('ko-KR')}</BookPriceInfo>
            <div>원</div>
            </BookPriceInfoTextContainer>
            <BookPriceRow>
              <BookPriceHeader>평균 입찰가</BookPriceHeader>
              <BookPriceText>{book.priceAverage.toLocaleString('ko-KR')}원</BookPriceText>
            </BookPriceRow>
            <BookPriceRow>
              <BookPriceHeader>현재 입찰 최저가</BookPriceHeader>
              <BookPriceText>{book.priceNow.toLocaleString('ko-KR')}원</BookPriceText>
            </BookPriceRow>
          </BookInfoRightContainer>
        </BookInfoContainerBody>
      </BookInfoContainer>
    </ComponentContainer>
  );
}

export default BookDetailForm;
