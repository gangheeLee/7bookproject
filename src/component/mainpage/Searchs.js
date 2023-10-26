import styled from "styled-components";
import React, { useState, useEffect } from "react";
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

// input 값이 변경(change) 될때마다
// useState 변수에 넣는다.
// 도서조회 버튼 Link 주소 뒤에, useState 변수를 붙여주면 된다.

function Searchs() {
  const [searchbook, setSearchbook] = useState(null);

  const onChange = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setSearchbook(e.target.value);
  };

  return (
    <SearchBox>
      <SearchTitle>어떤 도서를 찾으세요?</SearchTitle>
      <SearchBar>
        <form>
          <input
            type="text"
            value={searchbook}
            placeholder="도서제목을 입력하세요"
            className="searchbar"
            onChange={onChange}
            style={{ fontSize: "20px" }}
          />
          {/* <input type="submit" value="도서 조회" className="searchbtn" /> */}
          <Link
            to={`/searchinfo/${searchbook}`}
            style={{ textDecoration: "none" }}
          >
            <button className="searchbtn">도서 조회</button>
          </Link>
        </form>
      </SearchBar>
      <BookLink>
        <Link to="/searchinfo/React" style={{ textDecoration: "none" }}>
          <button className="btnbook"># React</button>
        </Link>
        <Link to="/searchinfo/C언어" style={{ textDecoration: "none" }}>
          <button className="btnbook"># C언어</button>
        </Link>
        <Link to="/searchinfo/Python" style={{ textDecoration: "none" }}>
          <button className="btnbook"># Python</button>
        </Link>
        <Link to="/searchinfo/Html" style={{ textDecoration: "none" }}>
          <button className="btnbook"># Html</button>
        </Link>
      </BookLink>
    </SearchBox>
  );
}

export default Searchs;
