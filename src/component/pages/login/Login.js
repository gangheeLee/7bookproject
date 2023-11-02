import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  margin: 0 auto;
  width: 50%;
`;

const PageContentTitle = styled.div`
  padding-top: 0.3rem;
  padding-left: 1.2rem;
  margin: 1rem 0;
  font-size: 1.6rem;
  font-weight: 700;
`;

const LoginBox = styled.div`
  border: 1.5px solid #b5b5b5;
  background-color: #ffffff;
  border-radius: 1.5rem;
  padding: 4rem 8rem;
  margin: 0 3rem 0;
`;

const LoginInputText = styled.input`
  border: 1.5px solid #b5b5b5;
  border-radius: 10px;
  margin: 0.2rem 0;
  padding: 0.4rem 0;
  width: 100%;
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
  padding: 0.4rem 0;
  width: 100%;
  height: 4rem;
`;

const SecondaryButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.4rem 0;
`;
const SecondaryButton = styled.button`
  background-color: #69433a;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 100%;
  text-align: center;
  width: 100%;
  height: 4rem;

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
  width: 100%;
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
  const [inputIDMatch, setInputIDMatch] = useState(true);
  const [inputPWMatch, setInputPWMatch] = useState(true);

  const LoginClick = (e) => {};

  const handleId = (e) => setInputID(e.target.value);
  const handlePw = (e) => setInputPW(e.target.value);

  return (
    <PageContainer>
      <PageContentTitle>로그인</PageContentTitle>
      <LoginBox>
        <LoginInputText
          type="text"
          value={inputID}
          onChange={handleId}
          placeholder="아이디"
          required
        />
        <LoginInputText
          type="password"
          value={inputPW}
          onChange={handlePw}
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
              <Link to="/">로그인</Link>
            </LoginButton>
          </LoginButtonContainer>

          <SecondaryButtonContainer>
            <SecondaryButton type="button">ID/PW 찾기</SecondaryButton>
            <SecondaryButton
              type="button"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Link to="/register">회원가입</Link>
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
