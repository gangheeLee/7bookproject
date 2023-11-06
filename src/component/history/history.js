import React from "react";
import "./history.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Saller = styled.p`
  font-size: 20px;
`;

function History() {
  const sellerId = "hanni316";
  const salesHistory = ["거래 내역", "거래 내역", "거래 내역"];

  return (
    <div className="page">
      <div className="title">판매자 히스토리</div>
      <div className="seller-info "></div>
      <div className="container">
        <div className="info-box">
          <Saller>판매자 정보</Saller>
          <p>판매자 ID: {sellerId}</p>
          <p>판매 내역</p>
          <p>
            {salesHistory.map((history, index) => (
              <li key={index}>{history}</li>
            ))}
          </p>
          <p className="star-rating">Review Point : 4</p>
        </div>
      </div>
      <button className="back-button">
        <Link to="/booksale" style={{ textDecoration: "none", color: "white" }}>
          뒤로가기
        </Link>
      </button>
    </div>
  );
}

export default History;
