import React from "react";
import styles from "../bookenroll/Main.module.css";

function Bookenroll(props) {
  return (
    <div className={styles.bookEnroll}>
      <div className={styles.enr}>
        <h1>도서 등록</h1>
      </div>
      <div className={styles.Bimg}>
        <img className={styles.image} src="/bagic.png" alt="도서 이미지" />
      </div>
      <div className={styles.file}>
        <label className={styles.file_button}>파일 업로드</label>
        <input type="file" style={{ display: "none" }} />
        <label className={styles.Btn}>이미지 삭제</label>
        <input
          type="button"
          className={styles.Btn}
          style={{ display: "none" }}
        />
      </div>
      <div className={styles.bookdiv}>
        <div className={styles.bookn}>
          <p>책 정보</p>
        </div>
        <div className={styles.Info}>
          <p>제목</p>
          <input type="text"></input>
          <p className={styles.p2}>저자</p>
          <input type="text"></input>
          <p className={styles.p2}>출판사</p>
          <input type="text"></input>
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
      <label className={styles.sendbtn}>구매 도서 등록</label>
      <input type="sumbit" style={{ display: "none" }}></input>
    </div>
  );
}

export default Bookenroll;
