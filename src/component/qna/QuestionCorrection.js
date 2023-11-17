import React, { useState } from "react";
import "../question/Question.module.css";
import styles from "../question/Question.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function QuestoionCorrection() {
  const Qtitle = localStorage.getItem("Qtitle");
  const Qcontent = localStorage.getItem("Qcontent");
  const navigate = useNavigate();
  const [qtitle, setQtitle] = useState(Qtitle);
  const [qcontent, setQcontent] = useState(Qcontent);
  const handletitle = (e) => {
    setQtitle(e.target.value);
  };
  const handlecontent = (e) => {
    setQcontent(e.target.value);
  };

  const ConClick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4001/questioncorrection", {
      QTitle: qtitle,
      Qcontent: qcontent,
    });
  };

  return (
    <div className={styles.All}>
      <div className="title">
        <p className={styles.p1}>Q&A</p>
      </div>
      <div className={styles.first}>
        <div style={{ marginTop: "50px" }}>
          <input
            type="text"
            className={styles.input}
            value={qtitle}
            onChange={handletitle}
            placeholder="제목"
          ></input>
          <textarea
            className={styles.cname}
            value={qcontent}
            onChange={handlecontent}
            placeholder="질문 내용을 작성해 주세요."
          ></textarea>
        </div>
      </div>
      <div
        className={styles.btn}
        onClick={ConClick}
        style={{ marginLeft: "750px", marginBottom: "67px" }}
      >
        <label className={styles.label}>게시물 수정</label>
        {/* <input type="button" style={{ display: "none" }}></input> */}
      </div>
      <div
        className={styles.btn}
        style={{ marginLeft: "870px", marginRight: "30px" }}
      >
        <label
          className={styles.label}
          onClick={() => {
            navigate("/qna");
          }}
        >
          뒤로가기
        </label>
        {/* <input type="button" style={{ display: "none" }}></input> */}
      </div>
    </div>
  );
}

export default QuestoionCorrection;
