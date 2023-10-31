import React from "react";
import "./history.css";
import styled from "styled-components";

function History() {
  const sellerId = "hanni316";
  const salesHistory = ["거래 내역", "거래 내역", "거래 내역"];

  return (
    <div className="page">
      <div className="title">판매자 히스토리</div>
      <div className="seller-info ">
        <h2>판매자 정보</h2>
      </div>
      <div className="container">
        <div className="info-box">
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
      <button className="back-button">뒤로가기</button>
    </div>
  );
}

export default History;
