import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageContainer from '../bookbid/PageContainer';
import PageContentTitle from '../bookbid/PageContentTitle';
import BookBidForm from '../bookbid/BookBidForm';
import { booklist } from '../data/books';

const FooterButton = styled.button`
  background-color: #774836;
  color: #fff;
  cursor: pointer;
  margin: 0.4rem 0.8rem;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: #EE592E;
  }
`;

const FooterAccentButtonContainer = styled.div`
  margin-right: 2.5rem;
`

const FooterAccentButton = styled.button`
  background-color: #774836;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: #76B6B1;
  }
`;

function BookBidPage() {
  const { id: pageBookId } = useParams();
  const navigate = useNavigate();

  const book = booklist.find((book) => book.id.toString() === pageBookId)
  const [formData, setFormData] = useState({});

  return (
    <PageContainer>
      <PageContentTitle>역경매 응찰 참여</PageContentTitle>
      <BookBidForm book={book} setFormData={setFormData} />
      <div style={{ textAlign: 'center' }}>
        <FooterButton
          onClick={() => {
            window.alert("TODO: 제출하기 예정\n" + JSON.stringify(formData))
          }}
        >
          제출하기
        </FooterButton>
      </div>
      <FooterAccentButtonContainer>
      <div style={{ textAlign: 'right' }}>
        <FooterAccentButton
          onClick={() => {
            navigate(`/book-request/detail/${book.id}`)
          }}
        >
          뒤로가기
        </FooterAccentButton>
      </div>
      </FooterAccentButtonContainer>
    </PageContainer>
  );
};

export default BookBidPage;
