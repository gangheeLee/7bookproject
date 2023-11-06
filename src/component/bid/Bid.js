import React, { useState } from "react";
import styled from "styled-components";
import styles from "../bookenroll/Main.module.css";
import { Link } from "react-router-dom";

const BidBox = styled.div`
  height: 100vh;
  display: flex;
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

const BookEnrollInput = styled.input`
  width: 250px;
  height: 30px;
  font-size: 16px;
  background: rgba(138, 138, 138, 0.1);
  border: 1px solid;
`;

const Bidbtn = styled.button`
  background-color: #774836;
  text-align: center;
  padding: 5px 7px;
  font-size: 16px;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 150px;
  margin-right: 250px;
`;

function Bid(props) {
  // 이미지 업로드
  const [selectedImage, setSelectedImage] = useState("/img/bagic.png");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //이미지 삭제
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("/img/bagic.png"); // 특정 사진의 URL로 설정해야 합니다.

  const handleShowImage = () => {
    setShowImage(true);
  };

  return (
    <BidBox>
      <BookImg>
        <BookTitle>역경매 응찰참여</BookTitle>
        <div className={styles.Bimg}>
          {selectedImage && (
            <img
              src={selectedImage}
              className={styles.image}
              alt="선택한 이미지"
            />
          )}
          <div
            className={styles.file}
            style={{ marginTop: "30px", width: "240px" }}
          >
            <label className={styles.file_button} htmlFor="imageUploadButton">
              파일 업로드
            </label>
            <input
              type="file"
              id="imageUploadButton"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <label
              className={styles.Btn}
              htmlFor="imgd"
              style={{ color: "white" }}
            >
              이미지 삭제
            </label>
            <input
              type="button"
              id="imgd"
              style={{ display: "none", marginLeft: "-20px" }}
              onClick={handleShowImage}
            />
          </div>
        </div>
      </BookImg>
      <BookInfo>
        <p style={{ fontSize: "20px" }}>책정보</p>
        <div>
          <p>제목</p>
          <BookEnrollInput></BookEnrollInput>
          <p className={styles.p2}>저자</p>
          <BookEnrollInput></BookEnrollInput>
          <p className={styles.p2}>출판사</p>
          <BookEnrollInput></BookEnrollInput>
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
        <Link to="/booksale" style={{ textDecoration: "none", color: "white" }}>
          <Bidbtn>제출하기</Bidbtn>
        </Link>
      </BookQuality>
      <BookPrice>
        <div className={styles.buy} style={{ marginTop: "215px" }}>
          <p className={styles.buyp}>판매가</p>
          <BookEnrollInput></BookEnrollInput>
        </div>
        <div className={styles.buy}>
          <p className={styles.buyp}>거래 방법 </p>
          <BookEnrollInput></BookEnrollInput>
        </div>

        <div className={styles.sendbox} style={{ marginTop: "150px" }}>
          <Link
            to="/booksale"
            style={{ textDecoration: "none", color: "white" }}
          >
            <label className={styles.sendbtn}>뒤로 가기</label>
            <input type="button" style={{ display: "none" }}></input>
          </Link>
        </div>
      </BookPrice>
      {/* </EnrollBox2> */}
    </BidBox>
  );
}

export default Bid;
