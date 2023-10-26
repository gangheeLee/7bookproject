import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

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
`

const LoginInputText = styled.input`
  border: 1.5px solid #b5b5b5;
  border-radius: 10px;
  margin: 0.2rem 0;
  padding: 0.4rem 0;
  width: 100%;
`
const ButtonContainer = styled.div`
`

const LoginButtonContainer = styled.div`
  margin: 0.4rem 0;
`

const LoginButton = styled.button`
  background-color: #69433A;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  padding: 0.4rem 0;
  width: 100%;
  height: 4rem;
`

const SecondaryButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.4rem 0;
`
const SecondaryButton = styled.button`
  background-color: #69433A;
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
`

const SocialLoginContainer = styled.div`
  cursor: pointer;
  margin: 0.2rem 0;
`;

const SocialLoginImageContainer = styled.div`
`

const SocialLoginImage = styled.img`
  width: 100%;
`

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: null,
    pw: null,
  });
  // const [initialData, setInitialData] = useState(""); //ID중복확인

  // //유효화 검사
  // const [idValid, setIdValid] = useState(false);
  // const [pwValid, setPwValid] = useState(false);
  // const [idCheckValid, setIdCheckValid] = useState(false);

  // //회원가입 버튼 활성화 또는 비활성화
  // const [notAllow, setNotAllow] = useState(true);

  // //정규식 통한 유효성 검사
  const handleId = (e) => {
    setForm({
      ...form,
      id: e.target.value
    });
    // const regex = /^[a-z]+[0-9]{4,20}$/g;
    // if (regex.test(e.target.value)) {
    //   setIdValid(true);
    //   // console.log(e.target.value)
    //   // console.log('통과')
    // } else {
    //   setIdValid(false);
    //   // console.log(e.target.value)
    // }
  };
  const handlePw = (e) => {
    setForm({
      ...form,
      pw: e.target.value
    });
    // const regex =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
    // if (regex.test(e.target.value)) {
    //   setPwValid(true);
    // } else {
    //   setPwValid(false);
    // }
  };

  // // id중복체크 구현

  // // const getData = async () => {
  // // const response = await axios.get("http://localhost:4001/users");
  // //   // console.log(response.data)
  // //   setInitialData(response.data);
  // // };

  // const checkIdDuplicate = () => {
  //   // console.log(response.data)
  //   // console.log(id);
  //   //return response.data;

  //   const data = initialData;
  //   // console.log(data)
  //   let checker = "a";
  //   for (let i = 0; i < data.length; i++) {
  //     // console.log(data[i].userId)
  //     if (id === data[i].userId) {
  //       checker = "b";
  //     }
  //   }

  //   checker === "b"
  //     ? alert("이미 등록된 ID입니다.")
  //     : alert("사용 가능한 ID입니다.");

  //   // if( checker === 'b'){
  //   //   alert('이미 등록된 ID입니다.')
  //   // }else{
  //   //   alert('사용 가능한 ID입니다.') && setIdCheckValid(true);
  //   // }
  //   if (checker === "a") {
  //     setIdCheckValid(true);
  //   }
  // };

  // //회원가입 버튼 활성화 여부 체크
  // useEffect(() => {
  //   if (idValid && pwValid && idCheckValid) {
  //     setNotAllow(false); //버튼 비활성화 해제
  //     return;
  //   }
  //   setNotAllow(true);
  // }, [idValid, pwValid, idCheckValid]);

  // useEffect(() => {
  //   // getData();
  // }, []);

  // //유효성 검사, id중복체크, 약관동의가 모두 통과되면 회원가입 버튼 클릭 후 회원가입 완료
  // const onClickConfirmButton = () => {
  //   fetch("/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id, pw }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  //   if (idValid && pwValid && idCheckValid) {
  //     alert("회원가입이 완료되었습니다.");
  //   } else {
  //     alert("회원가입에 실패하였습니다.");
  //   }
  // };

  return (
    <PageContainer>
      <PageContentTitle>로그인</PageContentTitle>
      <LoginBox>
        <LoginInputText
          type="text"
          value={form.id}
          onChange={handleId}
          placeholder="아이디"
          required
        />
        <LoginInputText
          type="password"
          value={form.pw}
          onChange={handlePw}
          placeholder="비밀번호"
          required
        />

        {/* disabled 속성은 notAllow 변수값에 따라 버튼 활성화 또는 비활성화 */}
        <ButtonContainer>
          <LoginButtonContainer>
            <LoginButton
              onClick={() => {
                navigate("/");
              }}
              // disabled={notAllow}
              type="submit"
            >
              로그인
            </LoginButton>
          </LoginButtonContainer>

          <SecondaryButtonContainer>
            <SecondaryButton
              onClick={() => {
                navigate("/findid");
              }}
              type="button"
            >
                ID/PW 찾기
            </SecondaryButton>
            <SecondaryButton
              onClick={() => {
                navigate("/register");
              }}
              type="button"
            >
              회원가입
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
