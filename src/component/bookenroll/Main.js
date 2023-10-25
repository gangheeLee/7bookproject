import React, { useState } from "react";
import styles from "../bookenroll/Main.module.css";

function Bookenroll(props) {
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
    <div style={{ height: "1050px" }}>
      <div className={styles.bookEnroll}>
        <div className={styles.enr}>
          <h1>도서 등록</h1>
        </div>
        <div className={styles.Bimg}>
          {selectedImage && (
            <img
              src={selectedImage}
              className={styles.image}
              alt="선택한 이미지"
            />
          )}
        </div>
        <div className={styles.file}>
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

          {/* <input className={styles.file_button} type="file" /> */}

          <label className={styles.Btn} htmlFor="imgd">
            이미지 삭제
          </label>
          <input
            type="button"
            id="imgd"
            style={{ display: "none" }}
            onClick={handleShowImage}
          />
          {/* {showImage && <img src={imageUrl} alt="특정 사진" style={{}}/>} */}
        </div>
        <div className={styles.bookdiv}>
          <div className={styles.bookn}>
            <p>책 정보</p>
          </div>
          <div className={styles.Info}>
            <p>제목</p>
            <input type="text" style={{ width: "300px" }}></input>
            <p className={styles.p2}>저자</p>
            <input type="text" style={{ width: "300px" }}></input>
            <p className={styles.p2}>출판사</p>
            <input type="text" style={{ width: "300px" }}></input>
          </div>
          <div className={styles.state}>
            <p className={styles.Sfont}>상품 상태</p>
            <div className={styles.chbox}>
              <div className={styles.cb1}>
                <input type="checkbox" id="check1" />
                <label for="check1"></label>
                <input
                  className={styles.box1}
                  type="text"
                  value={"최상"}
                  readOnly="readonly"
                ></input>
              </div>
              <div className={styles.cb2}>
                <input type="checkbox" id="check2" />
                <label for="check2"></label>
                <input
                  className={styles.box1}
                  type="text"
                  value={"상"}
                  readOnly="readonly"
                ></input>
              </div>
              <div className={styles.cb3}>
                <input type="checkbox" id="check3" />
                <label for="check3"></label>
                <input
                  className={styles.box1}
                  type="text"
                  value={"중"}
                  readOnly="readonly"
                ></input>
              </div>
              <div className={styles.cb4}>
                <input type="checkbox" id="check4" />
                <label for="check4"></label>
                <input
                  className={styles.box1}
                  type="text"
                  value={"하"}
                  readOnly="readonly"
                ></input>
              </div>
            </div>
          </div>
          <div className={styles.buy}>
            <p className={styles.buyp}>구매 희망 가격</p>
            <input className={styles.buybox} type="text"></input>
          </div>
        </div>
      </div>
      <div className={styles.sendbox}>
        <label className={styles.sendbtn}>구매 도서 등록</label>
        <input type="sumbit" style={{ display: "none" }}></input>
      </div>
    </div>
  );
}

export default Bookenroll;
