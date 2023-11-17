import React, { useState } from "react";
import styles from "../bookenroll/Main.module.css";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const EnrollBox = styled.div`
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

function Bookenroll(props) {
  // 이미지 업로드
  const [selectedImage, setSelectedImage] = useState("/img/bagic.png");
  const userID = localStorage.getItem("userID");
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
  ////////////////////// 버튼 클릭시 구매등록도서 데이터베이스에 저장 /////////////////////
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [desiredPrice, setDesiredPrice] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [quality, setQuality] = useState("");

  const PurEnroll = (e) => {
    e.preventDefault();
    console.log(userID);
    axios
      .post("http://localhost:4001/bookenroll", {
        PID: userID,
        PBookTitle: title,
        PAuthor: author,
        PPublisher: publisher,
        DesiredPrice: desiredPrice,
        PQuality: quality,
      })
      .then((res) => {
        console.log("data전송");
      })
      .catch(function (err) {
        alert("error는 " + err);
      });
  };

  const Title = (e) => {
    setTitle(e.target.value);
  };
  const Author = (e) => {
    setAuthor(e.target.value);
  };
  const Publisher = (e) => {
    setPublisher(e.target.value);
  };
  const DesiredPrice = (e) => {
    setDesiredPrice(e.target.value);
  };

  const handleCheckbox1Change = () => {
    setCheckbox1(true);
    setCheckbox2(false);
    setCheckbox3(false);
    setCheckbox4(false);
    setQuality("최상");
  };
  const handleCheckbox2Change = () => {
    setCheckbox1(false);
    setCheckbox2(true);
    setCheckbox3(false);
    setCheckbox4(false);
    setQuality("상");
  };
  const handleCheckbox3Change = () => {
    setCheckbox1(false);
    setCheckbox2(false);
    setCheckbox3(true);
    setCheckbox4(false);
    setQuality("중");
  };
  const handleCheckbox4Change = () => {
    setCheckbox1(false);
    setCheckbox2(false);
    setCheckbox3(false);
    setCheckbox4(true);
    setQuality("하");
  };

  return (
    <EnrollBox>
      <BookImg>
        <BookTitle>도서 등록</BookTitle>
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
              <input
                type="file"
                id="imageUploadButton"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </label>
            <label
              className={styles.Btn}
              htmlFor="imgd"
              style={{ color: "white" }}
            >
              이미지 삭제
              <input
                type="button"
                id="imgd"
                style={{ display: "none", marginLeft: "-20px" }}
                onClick={handleShowImage}
              />
            </label>
          </div>
        </div>
      </BookImg>
      <BookInfo>
        <p style={{ fontSize: "20px" }}>책정보</p>
        <div>
          <p>제목</p>
          <BookEnrollInput value={title} onChange={Title}></BookEnrollInput>
          <p className={styles.p2}>저자</p>
          <BookEnrollInput value={author} onChange={Author}></BookEnrollInput>
          <p className={styles.p2}>출판사</p>
          <BookEnrollInput
            value={publisher}
            onChange={Publisher}
          ></BookEnrollInput>
        </div>
      </BookInfo>
      <BookQuality>
        <div className={styles.state}>
          <p style={{ fontSize: "16px" }}>상품 상태</p>
          <div>
            <Check>
              <label for="check1">
                <input
                  className="check1"
                  checked={checkbox1}
                  onChange={handleCheckbox1Change}
                  type="checkbox"
                  id="check1"
                />
                <input
                  className={styles.box1}
                  type="text"
                  checked={checkbox1}
                  onChange={handleCheckbox1Change}
                  value={"최상"}
                  readOnly="readonly"
                />
              </label>
            </Check>
            <Check>
              <label for="check2">
                <input
                  type="checkbox"
                  checked={checkbox2}
                  onChange={handleCheckbox2Change}
                  className="check1"
                  id="check2"
                />
                <input
                  className={styles.box1}
                  type="text"
                  value={"상"}
                  readOnly="readonly"
                ></input>
              </label>
            </Check>
            <Check>
              <label for="check3">
                <input
                  type="checkbox"
                  checked={checkbox3}
                  onChange={handleCheckbox3Change}
                  className="check1"
                  id="check3"
                />
                <input
                  className={styles.box1}
                  type="text"
                  value={"중"}
                  readOnly="readonly"
                />
              </label>
            </Check>
            <Check>
              <label
                className={styles.box1}
                type="text"
                value={"하"}
                readOnly="readonly"
              >
                <input
                  type="checkbox"
                  checked={checkbox4}
                  onChange={handleCheckbox4Change}
                  className="check1"
                  id="check4"
                />
                <input
                  className={styles.box1}
                  type="text"
                  value={"하"}
                  readOnly="readonly"
                />
              </label>
            </Check>
          </div>
        </div>
      </BookQuality>
      <BookPrice>
        <div className={styles.buy} style={{ marginTop: "215px" }}>
          <p className={styles.buyp}>구매 희망 가격</p>
          <BookEnrollInput
            value={desiredPrice}
            onChange={DesiredPrice}
          ></BookEnrollInput>
        </div>
        <div className={styles.sendbox} style={{ marginTop: "230px" }}>
          <label onClick={PurEnroll} className={styles.sendbtn}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              구매 도서 등록
            </Link>
          </label>
          <button type="sumbit" style={{ display: "none" }}></button>
        </div>
      </BookPrice>
    </EnrollBox>
  );
}

export default Bookenroll;
