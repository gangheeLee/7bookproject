import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PWfind from "./Pwfind";

const PwsearchBox = styled.div`
  height: 66.5vh;
  margin: 0 auto;
  justify-content: center;
`;

const Searchs = styled.div`
  margin-top: 70px;
  width: 300px;
  height: 50px;
  display: flex;
`;

const ID = styled.div`
  width: 150px;
  height: 50px;
  background: #76b6b1;
  cursor: pointer;
  text-align: center;
  border-radius: 20px 0px 0;
`;
const PW = styled.div`
  width: 150px;
  height: 50px;
  background: #76b6b1;
  cursor: pointer;
  text-align: center;
  border-radius: 0 20px 0 0;
`;

const PWs = styled.div`
  width: 299px;
  height: 250px;
  border: 1px solid;
  border-radius: 0 0 20px 20px;
`;

const Inputs = styled.input`
  margin-left: 10px;
  margin-bottom: 20px;
  background: rgba(138, 138, 138, 0.1);
`;

const Lables = styled.label`
  margin-left: 35px;
`;

const Button = styled.button`
  background-color: #22b8cf;
  text-align: center;
  padding: 5px 7px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  margin-left: 135px;
`;
function Pwsearch() {
  const navigate = useNavigate();
  const [findID, setFindID] = useState("");
  const [findname, setFindname] = useState("");
  const [findphone, setFindphone] = useState("");

  const PWOn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/pwsearch", {
        ID: findID,
        Name: findname,
        PhoneNumber: findphone,
      })
      .then((res) => {
        if (res.data == 1) {
          alert("비밀번호를 재설정하세요.");
          localStorage.setItem("findID", findID);
          const FindID = localStorage.getItem("findID");
          navigate("/pwfind");
        } else {
          alert("회원정보가 일치하지 않습니다.");
        }
      })
      .catch(function (err) {
        alert("err는 " + err);
      });
  };

  const FindID = (e) => {
    const newfindID = e.target.value;
    setFindID(newfindID);
  };
  const Findname = (e) => {
    const newfindname = e.target.value;
    setFindname(newfindname);
  };
  const Findphone = (e) => {
    const newfindphone = e.target.value;
    setFindphone(newfindphone);
  };
  return (
    <PwsearchBox>
      <Searchs>
        <ID>
          <Link
            to="/idsearchs"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>아이디 찾기</p>
          </Link>
        </ID>
        <PW>
          <p style={{ color: "white" }}>비밀번호 찾기</p>
        </PW>
      </Searchs>
      <PWs>
        <Lables>아이디</Lables>
        <Inputs
          type="text"
          value={findID}
          onChange={FindID}
          style={{ marginTop: "60px", marginLeft: "25px" }}
        ></Inputs>
        <Lables>이름</Lables>
        <Inputs
          type="text"
          value={findname}
          onChange={Findname}
          style={{ marginLeft: "40px" }}
        ></Inputs>
        <Lables>전화번호</Lables>
        <Inputs type="text" value={findphone} onChange={Findphone}></Inputs>
        <Button onClick={PWOn}>확인</Button>
      </PWs>
    </PwsearchBox>
  );
}

export default Pwsearch;
