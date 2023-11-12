import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
          style={{ marginTop: "60px", marginLeft: "40px" }}
        ></Inputs>
        <Lables>생년월일</Lables>
        <Inputs type="text"></Inputs>
        <Lables>전화번호</Lables>
        <Inputs type="text"></Inputs>
        <Button>확인</Button>
      </IDs>
    </IdsearchBox>
  );
}

export default Idsearchs;