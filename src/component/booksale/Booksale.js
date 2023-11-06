import React, { useState } from "react";
import styles from "../bookenroll/Main.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SaleBox = styled.div`
  height: 150vh;
  display: flex;
  flex-wrap: wrap;
`;

const BookTitle = styled.div`
  // height: 10vh;
  margin-left: 200px;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 30px;
`;

// const EnrollBox2 = styled.div`
//   // dispaly: flex;
//   height: 90vh;
// `;

const BookImg = styled.div`
  width: 400px;
  // padding-right: 50px;
  // border-right: solid 3px black;
`;

const BookInfo = styled.div`
  width: 240px;
  padding-left: 70px;
  margin-top: 150px;
`;

const BookQuality = styled.div`
  width: 400px;
  text-align: center;
  margin-top: 200px;
`;

const BookPrice = styled.div`
  width: 300px;
`;

const Check = styled.div`
  margin-top: 40px;
  margin-left: 80px;
  margin-bottom: -20px;
  display: flex;
  alignitems: center;
`;

const Booksalep = styled.p`
  width: 250px;
  height: 30px;
  font-size: 16px;
  background: rgba(138, 138, 138, 0.1);
  border: 1px solid;
`;
const Booksaleinput = styled.input`
  width: 250px;
  height: 30px;
  font-size: 16px;
  background: rgba(138, 138, 138, 0.1);
  border: 1px solid;
`;
const BidBox = styled.div`
  height: 50vh;
`;

const BidTh = styled.th`
  width: 150px;
  height: 20px;
  background: white;
  padding-top: 20px;
  text-align: center;
  border: none;
`;

const BidTr = styled.tr`
  border: none;
`;

const BidTd = styled.td`
  padding: 0px 30px;
  border: none;
`;

const Bidbtn = styled.button`
  background-color: #774836;
  text-align: center;
  padding: 5px 7px;
  font-size: 16px;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
`;

const BidP = styled.p`
  width: 200px;
  height: 30px;
  font-size: 16px;
  background: rgba(138, 138, 138, 0.1);
  border: 1px solid;
`;

const Bookhis = styled.button`
  margin-left: 240px;
  height: 50px;
  background-color: #774836;
  text-align: center;
  padding: 5px 7px;
  font-size: 16px;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`;

function Booksale(props) {
  return (
    <SaleBox>
      <BookImg>
        <BookTitle>도서 상세조회</BookTitle>
        <div className={styles.Bimg}>
          <img
            src="/asset/book1.png"
            className={styles.image}
            alt="도서 이미지"
          />
        </div>
      </BookImg>
      <BookInfo>
        <p style={{ fontSize: "20px" }}>책정보</p>
        <div>
          <p>제목</p>
          <Booksalep>나미야 잡화점의 기적</Booksalep>
          <p className={styles.p2}>저자</p>
          <Booksalep>히가시노 게이고</Booksalep>
          <p className={styles.p2}>출판사</p>
          <Booksalep>가도카와 쇼텐</Booksalep>
        </div>
      </BookInfo>
      <BookQuality>
        <div className={styles.state}>
          <p style={{ fontSize: "16px" }}>상품 상태</p>
          <div>
            <Check>
              <input className="check1" type="checkbox" id="check1" />
              <label for="check1"></label>
              <input
                className={styles.box1}
                type="text"
                value={"최상"}
                readOnly="readonly"
              ></input>
            </Check>
            <Check>
              <input type="checkbox" className="check1" id="check2" />
              <label for="check2"></label>
              <input
                className={styles.box1}
                type="text"
                value={"상"}
                readOnly="readonly"
              ></input>
            </Check>
            <Check>
              <input type="checkbox" className="check1" id="check3" />
              <label for="check3"></label>
              <input
                className={styles.box1}
                type="text"
                value={"중"}
                readOnly="readonly"
              ></input>
            </Check>
            <Check>
              <input type="checkbox" className="check1" id="check4" />
              <label for="check4"></label>
              <input
                className={styles.box1}
                type="text"
                value={"하"}
                readOnly="readonly"
              ></input>
            </Check>
          </div>
        </div>
      </BookQuality>
      <BookPrice>
        <div className={styles.buy} style={{ marginTop: "215px" }}>
          <p className={styles.buyp}>구매 희망 가격</p>
          <Booksaleinput></Booksaleinput>
        </div>
      </BookPrice>
      <Link to="/history">
        <Bookhis>test용 구매자ID</Bookhis>
      </Link>
      <BidBox>
        <table style={{ marginLeft: "180px", border: "none" }}>
          <BidTh>판매자 ID</BidTh>
          <BidTh>상품 품질</BidTh>
          <BidTh>응찰 가격</BidTh>
          <BidTh>결제 방식</BidTh>
          <BidTh></BidTh>
          <tbody>
            <BidTr>
              <BidTd>
                <BidP>test1</BidP>
              </BidTd>
              <BidTd>
                <BidP>최상</BidP>
              </BidTd>
              <BidTd>
                <BidP>24000원</BidP>
              </BidTd>
              <BidTd>
                <BidP>직접 거래</BidP>
              </BidTd>
              <BidTd>
                <Bidbtn>구매</Bidbtn>
              </BidTd>
            </BidTr>
            <BidTr>
              <BidTd>
                <BidP>test2</BidP>
              </BidTd>
              <BidTd>
                <BidP>상</BidP>
              </BidTd>
              <BidTd>
                <BidP>23000원</BidP>
              </BidTd>
              <BidTd>
                <BidP>택배 거래</BidP>
              </BidTd>
              <BidTd>
                <Bidbtn>구매</Bidbtn>
              </BidTd>
            </BidTr>
            <BidTr>
              <BidTd>
                <BidP>test3</BidP>
              </BidTd>
              <BidTd>
                <BidP>중</BidP>
              </BidTd>
              <BidTd>
                <BidP>20000원</BidP>
              </BidTd>
              <BidTd>
                <BidP>택배 거래</BidP>
              </BidTd>
              <BidTd>
                <Bidbtn>구매</Bidbtn>
              </BidTd>
            </BidTr>
            <BidTr>
              <BidTd>
                <BidP>test4</BidP>
              </BidTd>
              <BidTd>
                <BidP>하</BidP>
              </BidTd>
              <BidTd>
                <BidP>15000원</BidP>
              </BidTd>
              <BidTd>
                <BidP>직접 거래</BidP>
              </BidTd>
              <BidTd>
                <Bidbtn>구매</Bidbtn>
              </BidTd>
            </BidTr>
          </tbody>
        </table>
      </BidBox>
      <Bidbtn style={{ width: "100px", height: "50px", marginLeft: "620px" }}>
        <Link to="/bid" style={{ textDecoration: "none", color: "white" }}>
          응찰 참여
        </Link>
      </Bidbtn>
      <Bidbtn style={{ width: "100px", height: "50px", marginLeft: "30px" }}>
        <Link
          to="/booksearch"
          style={{ textDecoration: "none", color: "white" }}
        >
          뒤로 가기
        </Link>
      </Bidbtn>
    </SaleBox>
  );
}

export default Booksale;
