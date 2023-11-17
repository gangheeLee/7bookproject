import React, { useEffect, useState } from "react";
import styles from "../qna/Qna.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const CorrecDel = styled.div``;

function Qna(props) {
  const navigate = useNavigate();
  const userID = localStorage.getItem("userID");
  const [posts, setPosts] = useState([]);
  const [num, setNum] = useState("");

  // console.log(posts);
  // const OnClickDel = (e) => {
  //   axios.post("http://localhost:4001/qnadel", { QNum: posts[0]["id"] });
  // };
  useEffect(() => {
    axios
      .get("http://localhost:4001/qna", { params: { QID: userID } })
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div className={styles.apage}>
        <div className="title">
          <p className={styles.p1}>Q&A</p>
        </div>
        <div className="write">
          <Link to="/que" style={{ textDecoration: "none" }}>
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
                  수정/삭제
                </th>
                {/* <th scope="col" colSpan={"2"} className={styles.question}>
                    (답변/)삭제
                  </th> */}
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {posts &&
                posts.map((post) => (
                  <tr key={post}>
                    <td>{post.id}</td>
                    <td colSpan={"2"}>{post.writer}</td>
                    <td colSpan={"5"}>{post.content}</td>
                    <td>
                      {post.writer === userID && (
                        <label
                          // onClick={() => {
                          //   navigate("/questioncorrection");
                          // }}
                          className={styles.btn1}
                        >
                          수정
                        </label>
                      )}
                      {post.writer === userID && (
                        <label
                          // onClick={OnClickDel(post)}
                          className={styles.btn1}
                        >
                          삭제
                        </label>
                      )}
                    </td>
                    {/* <td> */}
                    {/* <Deletebtn /> */}
                    {/* <Link to="/anw" style={{ textDecoration: "none" }}>
                        <label className={styles.btn1}>답변</label>
                        <button style={{ display: "none" }}></button>
                      </Link> */}
                    {/* <button style={{ display: "none" }}></button> */}
                    {/* </td> */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ height: "20vh" }}></div>
    </>
  );
}

export default Qna;
