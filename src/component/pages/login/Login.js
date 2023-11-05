import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  margin: 0 auto;
  width: 460px;
`;

const PageContentTitle = styled.div`
  padding-top: 0.3rem;
  margin: 2rem 0;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const LoginBox = styled.div`
  border: 1.5px solid #b5b5b5;
  background-color: white;
  border-radius: 1.5rem;
  padding: 2rem 2rem;
  margin-bottom: 140px;
`;

const LoginInputText = styled.input`
  border: 1.5px solid #b5b5b5;
  border-radius: 10px;
  background: rgba(138, 138, 138, 0.1);
  margin-bottom: 4px;
  margin-left: 50px;
  padding: 0.4rem 0;
  width: 300px;
`;
const ButtonContainer = styled.div``;

const LoginButtonContainer = styled.div`
  margin: 0.4rem 0;
`;

const LoginButton = styled.button`
  background-color: #69433a;
  border: none;
  text-decoration: none;

  border-radius: 10px;
  color: #ffffff;
  margin-left: 50px;
  padding: 0.4rem 0;
  width: 300px;
  height: 35px;
`;

const SecondaryButtonContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin-top: 0.4rem;
  margin-left: 50px;
  margin-right: 200px;
`;
const SecondaryButton = styled.button`
  background-color: #69433a;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 100%;
  text-align: center;
  width: 150px;
  height: 35px;

  &:first-child {
    margin-right: 0.2rem;
  }
  &:last-child {
    margin-left: 0.2rem;
  }
`;

const SocialLoginContainer = styled.div`
  cursor: pointer;
  margin: 0.2rem 0;
`;

const SocialLoginImageContainer = styled.div``;

const SocialLoginImage = styled.img`
  width: 300px;
  height: 50px;
  margin-left: 50px;
`;

export default function Login() {
  // const navigate = useNavigate();

  // const [form, setForm] = useState({
  //   id: null,
  //   pw: null,
  // });

  // const handleId = (e) => {
  //   setForm({
  //     ...form,
  //     id: e.target.value,
  //   });
  // };

  // const handlePw = (e) => {
  //   setForm({
  //     ...form,
  //     pw: e.target.value,
  //   });
  // };

  //////////////////////// user테이블 정보 서버에서 가져옴 //////////////////////////
  const [userlogin, setUserLogin] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4001/getLogin")
      .then((res) => {
        setUserLogin(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  ////////////////////////////////////////////////////////////////////////////////
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");

  const LoginClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/login", {
        ID: userId,
        PW: userPw,
      })
      .then((res) => {
        //데이터 전송 성공 시 response 받음
        alert("");

        console.log(res.config.data);
        console.log("데이터 전송 소성");
      })
      .catch(function (err) {
        //데이터 전송 실패 시 error 받음
        alert("error는 " + err);
      });
  };

  const userId = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setInputID(e.target.value);
  };

  const userPw = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setInputPW(e.target.value);
  };

  return (
    <PageContainer>
      <PageContentTitle>로그인</PageContentTitle>
      <LoginBox>
        <LoginInputText
          type="text"
          value={inputID}
          onChange={userId}
          placeholder="아이디"
          required
        />
        <LoginInputText
          type="password"
          value={inputPW}
          onChange={userPw}
          placeholder="비밀번호"
          required
        />

        {/* disabled 속성은 notAllow 변수값에 따라 버튼 활성화 또는 비활성화 */}
        <ButtonContainer>
          <LoginButtonContainer>
            <LoginButton
              onClick={LoginClick}
              type="submit"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                로그인
              </Link>
            </LoginButton>
          </LoginButtonContainer>

          <SecondaryButtonContainer>
            <SecondaryButton type="button">ID/PW 찾기</SecondaryButton>
            <SecondaryButton type="button">
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                회원가입
              </Link>
            </SecondaryButton>
          </SecondaryButtonContainer>

          <SocialLoginContainer>
            <SocialLoginImageContainer>
              <SocialLoginImage
                src={process.env.PUBLIC_URL + "/img/kakao.png"}
                alt=""
                onClick={() => {
                  window.alert("TODO: KAKAO LOGIN");
                }}
              />
            </SocialLoginImageContainer>
          </SocialLoginContainer>
          <SocialLoginContainer>
            <SocialLoginImageContainer>
              <SocialLoginImage
                src={process.env.PUBLIC_URL + "/img/naver.png"}
                alt=""
                onClick={() => {
                  window.alert("TODO: NAVER LOGIN");
                }}
              />
            </SocialLoginImageContainer>
          </SocialLoginContainer>
        </ButtonContainer>
      </LoginBox>
    </PageContainer>
  );
}
