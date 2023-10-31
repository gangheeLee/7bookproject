import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../lib/styles/palette";
import Button from "../common/Button";
import "open-color";

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */
const BodyBlick = styled.div`
  width: 100%;
  display: flex;
  // margin: 0 auto;
  justify-content: center;
`;

const AuthFormBlock = styled.div`
  // margin: 0 auto;
  width: 50%;
  align-item: center;
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
  padding: 0;
  backgroundcolor: ${palette.cyan[7]};
`;

const StyledLabel = styled.label`
  display: block;
  margin: 0 auto;
  padding: 0;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  width: 100%;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  &:focus {
    color: #0ca678;
    border-bottom: 1px solid ${palette.gray[7]};
  }

  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ type }) => {
  const text = textMap[type];

  return (
    <BodyBlick>
      <AuthFormBlock style={{ marginLeft: "100px" }}>
        <h3>{text}</h3>
        <form>
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="이름"
          />
          <StyledInput
            autoComplete="userid"
            name="userid"
            placeholder="아이디"
          />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
          />
          {type === "register" && (
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
            />
          )}
          <StyledInput
            autoComplete="userhp"
            name="userhp"
            placeholder="휴대전화(010-1234-1234)"
          />
          <StyledInput
            autoComplete="useremail"
            name="useremail"
            placeholder="이메일"
            type="email"
          />
          <StyledInput
            autoComplete="userby"
            name="userby"
            placeholder="생년월일(ex. 1995-01-01)"
          />
          <StyledLabel>
            <StyledInput
              autoComplete="useragm"
              name="useragm"
              id="useragm"
              placeholder="만 14세 이상입니다.(필수)"
              type="checkbox"
              style={{ width: "1rem", height: "1rem" }}
            />
            <span style={{ color: "blue", fontWeight: "bold" }}>[필수]</span> 만
            14세 이상입니다
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              autoComplete="useragm"
              name="useragm"
              id="useragm"
              placeholder="본 서비스 이용약관 동의(필수)"
              type="checkbox"
              style={{ width: "1rem", height: "1rem" }}
            />
            <span style={{ color: "blue", fontWeight: "bold" }}>[필수]</span>{" "}
            이용약관 동의
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              autoComplete="useragm"
              name="useragm"
              id="useragm"
              placeholder="개인정보 동의"
              type="checkbox"
              style={{ width: "1rem", height: "1rem" }}
            />
            <span style={{ color: "blue", fontWeight: "bold" }}>[필수]</span>{" "}
            개인정보 수집 및 이용 동의
          </StyledLabel>

          <StyledLabel>
            <StyledInput
              autoComplete="useragm"
              name="useragm"
              id="useragm"
              placeholder="마케팅 동의"
              type="checkbox"
              style={{ width: "1rem", height: "1rem" }}
            />
            <span style={{ color: "blue", fontWeight: "bold" }}>[선택]</span>{" "}
            마케팅 정보수집에 대한 동의
          </StyledLabel>

          <ButtonWithMarginTop cyan fullWidth>
            로그인
          </ButtonWithMarginTop>
        </form>

        <Footer>
          {type === "login" ? (
            <Link to="/register">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Footer>
      </AuthFormBlock>
    </BodyBlick>
  );
};

export default AuthForm;
