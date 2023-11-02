import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../lib/styles/palette";
import Button from "../common/Button";
import "open-color";
import axios from "axios";
/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */
const BodyBlick = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  // margin: 0 auto;
  justify-content: center;
`;

const AuthFormBlock = styled.div`
  margin-top: 40px;
  width: 50%;
  align-item: center;
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }

  margin-left: 100px;
  height: 80vh;
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
  width: 500px;
  text-align: center;
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
  width: 500px;
`;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const PWmessage = styled.div`
  font-si ze: 2px;
  color: red;
  text-align:center;
  margin-right:170px;
`;

const AuthForm = ({ type }) => {
  const text = textMap[type];
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [sID, setSID] = useState(null);
  const [sName, setSName] = useState(null);
  const [sBirth, setSBirth] = useState(null);
  const [sPhoneNumber, setSPhoneNumber] = useState(null);
  const [sEmail, setSEmail] = useState(null);
  const [isAllChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(4).fill(false));

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // 비밀번호와 비밀번호 확인 필드 값을 비교하여 상태 업데이트
    setPasswordsMatch(newPassword === passwordConfirm);
    console.log(e.target);
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    const newPasswordConfirm = e.target.value;
    setPasswordConfirm(newPasswordConfirm);
    // 비밀번호와 비밀번호 확인 필드 값을 비교하여 상태 업데이트
    setPasswordsMatch(password === newPasswordConfirm);
  };

  //////////////////////////// 체크박스 ///////////////////////////////

  const handleAllCheck = () => {
    setAllChecked((prev) => !prev);
    let array = new Array(4).fill(!isAllChecked);
    setCheckedState(array);
  };

  const handleMonoCheck = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const checkedLength = updatedCheckedState.reduce((sum, currentState) => {
      if (currentState === true) {
        return sum + 1;
      }
      return sum;
    }, 0);
    setAllChecked(checkedLength === updatedCheckedState.length);
  };

  /////////////////////////////////////////////////////////////////////////

  ////////////////////////// 회원정보 mysql로 ///////////////////////////////

  const onId = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setSID(e.target.value);
  };

  const onName = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setSName(e.target.value);
  };

  const onBirth = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setSBirth(e.target.value);
  };

  const onPhonenumber = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setSPhoneNumber(e.target.value);
  };

  const onEmail = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setSEmail(e.target.value);
  };

  const usersave = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/register", {
        ID: sID,
        PW: password,
        Name: sName,
        Birth: sBirth,
        PhoneNumber: sPhoneNumber,
        Email: sEmail,
      })
      .then((res) => {
        //데이터 전송 성공 시 response 받음
        alert("회원가입 성공");

        console.log(res.config.data);
        console.log("데이터 전송 소성");
      })
      .catch(function (err) {
        //데이터 전송 실패 시 error 받음
        alert("error는 " + err);
      });
  };

  //////////////////////////////////////////////////////////////////////////////////////

  return (
    <BodyBlick>
      <AuthFormBlock>
        <h3 style={{ textAlign: "center", marginRight: "60px" }}>{text}</h3>
        <form style={{ marginLeft: "120px" }}>
          <StyledInput
            autoComplete="username"
            name="username"
            value={sName}
            onChange={onName}
            placeholder="이름"
          />
          <StyledInput
            autoComplete="userid"
            name="userid"
            value={sID}
            onChange={onId}
            placeholder="아이디"
          />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />
          {type === "register" && (
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              placeholder="비밀번호 확인"
              type="password"
            />
          )}
          {!passwordsMatch && (
            <PWmessage>비밀번호가 일치하지 않습니다.</PWmessage>
          )}
          <StyledInput
            autoComplete="userhp"
            name="userhp"
            value={sPhoneNumber}
            onChange={onPhonenumber}
            placeholder="휴대전화(010-1234-1234)"
          />
          <StyledInput
            autoComplete="useremail"
            name="useremail"
            value={sEmail}
            onChange={onEmail}
            placeholder="이메일"
            type="email"
          />
          <StyledInput
            autoComplete="userby"
            name="userby"
            value={sBirth}
            onChange={onBirth}
            placeholder="생년월일(ex. 1995-01-01)"
          />
          <StyledLabel>
            <StyledInput
              autoComplete="useragm"
              name="useragm"
              id="useragm"
              placeholder="이용약관 및 개인정보수집 및 이용 모두 동의합니다."
              type="checkbox"
              checked={isAllChecked}
              onChange={() => handleAllCheck()}
              style={{ width: "1rem", height: "1rem" }}
            />
            <span style={{ color: "blue", fontWeight: "bold" }}>[필수]</span>{" "}
            이용약관 및 개인정보수집 및 이용 모두 동의합니다.
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              autoComplete="useragm"
              name="useragm"
              id="useragm"
              placeholder="만 14세 이상입니다.(필수)"
              type="checkbox"
              checked={checkedState[0]}
              onChange={() => handleMonoCheck(0)}
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
              checked={checkedState[1]}
              onChange={() => handleMonoCheck(1)}
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
              checked={checkedState[2]}
              onChange={() => handleMonoCheck(2)}
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
              checked={checkedState[3]}
              onChange={() => handleMonoCheck(3)}
              style={{ width: "1rem", height: "1rem" }}
            />
            <span style={{ color: "blue", fontWeight: "bold" }}>[선택]</span>{" "}
            마케팅 정보수집에 대한 동의
          </StyledLabel>

          <ButtonWithMarginTop cyan fullWidth onClick={usersave}>
            회원가입
          </ButtonWithMarginTop>
        </form>

        <Footer>
          {type === "login" ? (
            <Link to="/">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Footer>
      </AuthFormBlock>
    </BodyBlick>
  );
};

export default AuthForm;
