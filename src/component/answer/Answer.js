import React from "react";
import styles from "../answer/Answer.module.css";

function Anw() {
  return (
    <div className={styles.All}>
      <div className="title">
        <p className={styles.p1}>Q&A</p>
      </div>
      <div className={styles.first}>
        <div>
          <p style={{ fontSize: "20px", marginLeft: "100px" }}>답변하기</p>
          <input
            type="text"
            className={styles.input}
            placeholder="제목"
          ></input>
          <textarea
            className={styles.cname}
            placeholder="답변 내용을 작성해 주세요."
          ></textarea>
        </div>
        <div className={styles.btn}>
          <label className={styles.label}>답변 등록</label>
          <input type="button" style={{ display: "none" }}></input>
        </div>
      </div>
    </div>
  );
}

export default Anw;
