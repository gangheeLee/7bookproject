import React from "react";
import styles from "./SearchIdComplete.module.css";

function Complete() {
  return (
    <div className={styles.TabMenu}>
      <h2>ID / PW 찾기</h2>
      <div className={styles.Tab}>
        <p>
          고객님의 복고서점 아이디는 <br />
          <span className={styles.PColor}>abcdef12</span> 입니다.
        </p>
      </div>
      <div className={styles.TabButton}>
        <div className={styles.TabBtn1}>
          <label htmlFor="TabBtn1">비밀번호 찾기</label>
          <input type="button" id="TabBtn1" style={{ display: "none" }} />
        </div>
        <div className={styles.TabBtn2}>
          <label htmlFor="TabBtn2">로그인</label>
          <input type="button" id="TabBtn2" style={{ display: "none" }} />
        </div>
      </div>
    </div>
  );
}

export default Complete;
