import React from "react";
import styles from "../question/Question.module.css";

function Que() {
  return (
    <div className={styles.All}>
      <div className="title">
        <p className={styles.p1}>Q&A</p>
      </div>
      <div className={styles.first}>
        <h2 className={styles.target}>질문 대상</h2>
        <select className={styles.select}>
          <option></option>
        </select>

        <div>
          <input
            type="text"
            className={styles.input}
            placeholder="제목"
          ></input>
          <textarea
            className={styles.cname}
            placeholder="질문 내용을 작성해 주세요."
          ></textarea>
        </div>
      </div>
      <div className={styles.btn}>
        <label className={styles.label}>게시물 등록</label>
        <input type="button" style={{ display: "none" }}></input>
      </div>
    </div>
  );
}

export default Que;
