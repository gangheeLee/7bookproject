import styled from "styled-components";
import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SearchBox = styled.div`
  height: 50vh;
  background: #e3cda9;
`;

const SearchTitle = styled.div`
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 30px;
  font-size: 30px;
  text-align: center;
`;

const BookLink = styled.div`
  width: 800px;
  padding-left: 350px;
  font-size: 20px;
  justify-content: space-between;
  display: flex;
`;

const SearchBar = styled.div`
  margin: 0;
  padding-bottom: 50px;
  text-align: center;
`;

function Search() {
  return (
    <SearchBox>
      <SearchTitle>어떤 도서를 찾으세요?</SearchTitle>
      <SearchBar>
        <form>
          <input
            type="text"
            placeholder="도서제목을 입력하세요"
            className="searchbar"
            style={{ fontSize: "20px" }}
          />
          <Link to="/searchinfo/React" style={{ textDecoration: "none" }}>
            <input type="submit" value="도서 조회" className="searchbtn" />
          </Link>
        </form>
      </SearchBar>
      <BookLink>
        <button className="btnbook"># 책 제목</button>
        <button className="btnbook"># 책 제목</button>
        <button className="btnbook"># 책 제목</button>
        <button className="btnbook"># 책 제목</button>
      </BookLink>
    </SearchBox>
  );
}

export default Search;
