import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const CardContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const CardImageContainer = styled.div`
  min-height: 150px;
  max-height: 490px;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #000;
  border-bottom: none;
`;

const CardImage = styled.img`
  width: 200px;
  height: 300px;
  background-color: #fff;
`;

const CardBody = styled.div`
  background-color: #fff;
  border: 1px solid #000;
`;

const CardBodyTitle = styled.div`
  background-color: inherit;
  padding: 0.2rem 0.8rem;
`;

const CardBodyAuthor = styled.div`
  background-color: inherit;
  padding: 0.2rem 0.8rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;
const CardFooterButton = styled.button`
  background-color: #774836;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: #2980b9;
  }
`;

const BookBox = styled.div`
  margin-left: 100px;
  position: relative;
`;

function BookCard({ book }) {
  const navigate = useNavigate();
  const userID = localStorage.getItem("userID");
  const [getbook, setGetbook] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4001/getBook", { params: { PID: userID } })
      .then((res) => {
        console.log(res.data);
        setGetbook(res.data);
        console.log(res.data[0]["PBookTitle"]);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const searchbtn = (e) => {
    localStorage.setItem("PImage", getbook.index);
  };

  return (
    <CardContainer style={{ alignItems: "center", width: "1300px" }}>
      {getbook &&
        getbook.map((item, index, array) => (
          <BookBox key={item}>
            <CardImageContainer>
              <CardImage src={item.PImage} alt={item.PBookTitle} />
            </CardImageContainer>

            <CardBody>
              <CardBodyTitle>{item.PBookTitle}</CardBodyTitle>
              <CardBodyAuthor>{item.PAuthor}</CardBodyAuthor>
            </CardBody>
            <CardFooter>
              <CardFooterButton
                onClick={(e) => {
                  localStorage.setItem("getbooks", item.getbook);
                  const getBook = localStorage.getItem("getbooks");
                }}
              >
                <Link
                  to="/booksale"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  상세조회
                </Link>
              </CardFooterButton>
              <CardFooterButton
                onClick={() => {
                  navigate(`/book-request/bid/${item.userID}`);
                }}
              >
                응찰참여
              </CardFooterButton>
            </CardFooter>
          </BookBox>
        ))}
    </CardContainer>
  );
}

export default BookCard;
