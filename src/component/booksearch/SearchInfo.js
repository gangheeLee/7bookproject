import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./SearchInfo.css";
import BookSaleList from "../booksalelist/SaleList";

const BookContent = styled.div`
  height: 50%;
  justify-content: center;
  display: flex;
`;

const BookTAP = styled.div`
  padding-top: 50px;
  padding-left: 100px;
`;

const Introduce = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

function SearchInfo() {
  const [searchinfo, setSearchinfo] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4001/getSearchInfo")
      .then((res) => {
        setSearchinfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {searchinfo &&
        searchinfo.map((item) => (
          <div key={item.id} className="infobox">
            <BookContent>
              <div className="image">이미지 자리입니다.{item.Image}</div>
              <BookTAP>
                <div className="bookcontent">제목 : {item.BookTitle}</div>
                <div className="bookcontent">저자 : {item.Author}</div>
                <div className="bookcontent">출판사 : {item.Publisher}</div>
              </BookTAP>
            </BookContent>
            <div className="infotitle">소개글</div>
            <Introduce>
              <div className="introemp">{/* 공백 */}</div>
              <div className="infocontent">{item.Introduction}</div>
              <div className="introemp">{/* 공백 */}</div>
            </Introduce>
          </div>
        ))}
    </div>
  );
}

export default SearchInfo;
