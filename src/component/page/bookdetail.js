import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import PageContainer from "../bookdetail/PageContainer";
import PageContentTitle from "../bookdetail/PageContentTitle";
import BookDetailForm from "../bookdetail/BookDetailForm";
import { booklist } from "../data/books";
import { Link } from "react-router-dom";

const FooterButton = styled.button`
  background-color: #774836;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: #ee592e;
  }
`;

const FooterAccentButtonContainer = styled.div`
  margin-right: 2.5rem;
`;

const FooterAccentButton = styled.button`
  background-color: #774836;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: #ee592e;
  }
`;

function BookDetailPage() {
  const { id: pageBookId } = useParams();
  const navigate = useNavigate();

  const book = booklist.find((book) => book.id.toString() === pageBookId);

  return (
    <PageContainer>
      <PageContentTitle>도서 상세조회</PageContentTitle>
      <BookDetailForm book={book} />
      <div style={{ textAlign: "center" }}>
        <FooterButton
          onClick={() => {
            navigate(`/book-request/bid/${book.id}`);
          }}
        >
          응찰참여
        </FooterButton>
      </div>
      <FooterAccentButtonContainer>
        <div style={{ textAlign: "right" }}>
          <FooterAccentButton
            onClick={() => {
              navigate(`/booksearch`);
            }}
          >
            뒤로가기
          </FooterAccentButton>
        </div>
      </FooterAccentButtonContainer>
    </PageContainer>
  );
}

export default BookDetailPage;
