import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
          style={{ marginTop: "60px", marginLeft: "25px" }}
        ></Inputs>
        <Lables>이름</Lables>
        <Inputs type="text" style={{ marginLeft: "40px" }}></Inputs>
        <Lables>전화번호</Lables>
        <Inputs type="text"></Inputs>
        <Button>확인</Button>
      </PWs>
    </PwsearchBox>
  );
}

export default Pwsearch;
