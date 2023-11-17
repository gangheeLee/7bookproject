import React, { useState } from "react";
import styles from "../question/Question.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function Que() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const userID = localStorage.getItem("userID");

  const handletitle = (e) => {
    setTitle(e.target.value);
  };
  const handlecontent = (e) => {
    setContent(e.target.value);
  };

  const ConClick = (e) => {
    e.preventDefault();
    if (title == "") {
      alert("제목을 입력하세요.");
    } else if (content == "") {
      alert("내용을 입력하세요.");
    } else {
      alert("게시물 등록 완료");
      navigate("/qna");
      axios
        .post("http://localhost:4001/question", {
          QID: userID,
          QTitle: title,
          QContent: content,
        })
        .then((res) => {
          localStorage.setItem("title", title);
          localStorage.setItem("content", content);
          const Qtitle = localStorage.getItem("title");
          const Qcontent = localStorage.getItem("content");
        })
        .catch(function (err) {
          alert("게시물 등록 실패");
        });
    }
  };

  return (
    <div className={styles.All}>
      <div className="title">
        <p className={styles.p1}>Q&A</p>
      </div>
      <div className={styles.first}>
        {/* <div style={{ marginLeft: "60px" }}>
          질문 대상
          <select className={styles.select}>
            <option></option>
          </select>
        </div> */}

        <div style={{ marginTop: "50px" }}>
          <input
            type="text"
            className={styles.input}
            value={title}
            onChange={handletitle}
            placeholder="제목"
          ></input>
          <textarea
            className={styles.cname}
            value={content}
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
        <label className={styles.label}>게시물 등록</label>
        <input type="button" style={{ display: "none" }}></input>
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
        <input type="button" style={{ display: "none" }}></input>
      </div>
    </div>
  );
}

export default Que;
