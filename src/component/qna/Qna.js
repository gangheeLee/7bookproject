import React, { useState } from "react";
import styles from "../qna/Qna.module.css";
import { Link } from "react-router-dom";

function Qna(props) {
  const [posts, setPosts] = useState([
    { id: 1, writer: "홍길동", content: "이것은 첫 번째 게시글입니다." },
  ]);

  const handleDelete = (postId) => {
    // 게시글 삭제 함수
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };
  return (
    <div className={styles.apage}>
      <div className="title">
        <p className={styles.p1}>Q&A</p>
      </div>
      <div className="write">
        <Link to="/que">
          <label className={styles.wbtn}>작성하기</label>
          <input type="button" style={{ display: "none" }}></input>
        </Link>
      </div>
      <div className={styles.divtable}>
        <table>
          <thead className={styles.thead}>
            <tr>
              <th scope="col" className={styles.num}>
                순번
              </th>
              <th scope="col" colSpan={"2"} className={styles.name}>
                작성자
              </th>
              <th scope="col" colSpan={"5"} className={styles.title}>
                제목
              </th>
              <th scope="col" colSpan={"2"} className={styles.question}>
                답변/삭제
              </th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td colSpan={"2"}>{post.writer}</td>
                <td colSpan={"5"}>{post.content}</td>
                <td>
                  <Link to="/anw">
                    <label className={styles.btn1}>답변</label>
                    <button style={{ display: "none" }}></button>
                  </Link>
                  <label
                    className={styles.btn1}
                    onClick={() => handleDelete(post.id)}
                  >
                    삭제
                  </label>
                  <button style={{ display: "none" }}></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Qna;
