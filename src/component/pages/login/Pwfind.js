import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const IdsearchBox = styled.div`
  height: 66.5vh;
  margin: 0 auto;
  justify-content: center;
`;

const IDs = styled.div`
  width: 370px;
  height: 300px;
  margin-top: 70px;
  border: 1px solid;
  border-radius: 20px;
  text-align: center;
`;

const Inputs = styled.input`
  //   margin-left: 10px;
  margin-bottom: 20px;
  background: rgba(138, 138, 138, 0.1);
`;

const Lables = styled.label``;
const Button = styled.button`
  background-color: #22b8cf;
  text-align: center;
  padding: 5px 7px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 30px;
`;

const PWmessage = styled.div`
  font-size: 5px;
  color: red;
`;

function PWfind() {
  const navigate = useNavigate();
  const findID = localStorage.getItem("findID");
  const [password, setPassword] = useState("");
  const [passwordcheck, setPasswordcheck] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const Password = (e) => {
    const newpassword = e.target.value;
    setPassword(newpassword);
    setPasswordMatch(newpassword === passwordcheck);
  };
  const Passwordcheck = (e) => {
    const newpasswordcheck = e.target.value;
    setPasswordcheck(newpasswordcheck);
    setPasswordMatch(password === newpasswordcheck);
  };
  console.log(findID);
  const pwchange = (e) => {
    e.preventDefault();
    if (password == passwordcheck) {
      axios
        .post("http://localhost:4001/pwfind", { PW: password, ID: findID })
        .then((res) => {});
      alert("비밀번호가 변경되었습니다.");
      navigate("/login");
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <IdsearchBox>
      <IDs>
        <div style={{ paddingTop: "30px" }}>
          <Lables style={{ marginLeft: "45px" }}>비밀번호</Lables>
          <Inputs
            type="password"
            value={password}
            onChange={Password}
            style={{ marginTop: "60px", marginLeft: "25px" }}
          ></Inputs>
          <br />
          <Lables style={{ marginLeft: "20px" }}>비밀번호 확인</Lables>
          <Inputs
            type="password"
            value={passwordcheck}
            onChange={Passwordcheck}
            style={{ marginLeft: "20px" }}
          ></Inputs>
          {!passwordMatch && (
            <PWmessage>비밀번호가 일치하지 않습니다.</PWmessage>
          )}
          <Button onClick={pwchange}>확인</Button>
        </div>
      </IDs>
    </IdsearchBox>
  );
}

export default PWfind;
