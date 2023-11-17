import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const IdsearchBox = styled.div`
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
  cursor: pointer;
  background: #76b6b1;
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

const IDs = styled.div`
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

function Idsearchs() {
  const navigate = useNavigate();
  const [findname, setFindname] = useState("");
  const [findbirth, setFindbirth] = useState("");
  const [findphone, setFindphone] = useState("");
  const LogOn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/idsearchs", {
        Name: findname,
        Birth: findbirth,
        PhoneNumber: findphone,
      })
      .then((res) => {
        if (res.data == 1) {
          localStorage.setItem("findname", findname);
          localStorage.setItem("findbirth", findbirth);
          localStorage.setItem("findphone", findphone);
          const Findname = localStorage.getItem("findname");
          const Findbirth = localStorage.getItem("findbirth");
          const Findphone = localStorage.getItem("findphone");
          navigate("/idfind");
          alert("회원정보가 일치합니다.");
        } else {
          alert("회원정보가 일치하지 않습니다.");
        }
      })
      .catch(function (err) {
        alert("err는 " + err);
      });
  };

  const Findname = (e) => {
    const newFindname = e.target.value;
    setFindname(newFindname);
  };
  const Findbirth = (e) => {
    const newFindbirth = e.target.value;
    setFindbirth(newFindbirth);
  };
  const Findphone = (e) => {
    const newFindphone = e.target.value;
    setFindphone(newFindphone);
  };
  return (
    <IdsearchBox>
      <Searchs>
        <ID>
          <p style={{ color: "white" }}>아이디 찾기</p>
        </ID>
        <PW>
          <Link
            to="/pwsearch"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>비밀번호 찾기</p>
          </Link>
        </PW>
      </Searchs>
      <IDs>
        <Lables>이름</Lables>
        <Inputs
          type="text"
          value={findname}
          onChange={Findname}
          style={{ marginTop: "60px", marginLeft: "40px" }}
        ></Inputs>
        <Lables>생년월일</Lables>
        <Inputs type="text" value={findbirth} onChange={Findbirth}></Inputs>
        <Lables>전화번호</Lables>
        <Inputs type="text" value={findphone} onChange={Findphone}></Inputs>
        {/* <Link to="/idfind"> */}
        <Button onClick={LogOn}>확인</Button>
        {/* </Link> */}
      </IDs>
    </IdsearchBox>
  );
}

export default Idsearchs;
