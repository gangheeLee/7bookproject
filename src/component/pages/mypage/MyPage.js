import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const UserInfoBox = styled.div`
  height: 110vh;
  display: flex;
`;

const UserInfoMenu = styled.div`
  height: 30vh;
  padding-top: 50px;
  width: 10%;
  font-size: 16px;
`;

const SubMenu1 = styled.div`
  width: 150px;
  height: 30px;
  border-top-right-radius: 10px 10px;
  color: #69433a;
  background: #76b6b1;
  text-align: center;
  border: 1px solid white;
`;
const SubMenu2 = styled.div`
  width: 150px;
  height: 30px;
  color: white;
  background: #76b6b1;
  text-align: center;
  border: 1px solid white;
`;
const SubMenu3 = styled.div`
  width: 150px;
  height: 30px;
  color: #69433a;
  border-bottom-right-radius: 10px 10px;
  background: #76b6b1;
  text-align: center;
  border: 1px solid white;
`;

const UserInfoTitle = styled.div`
  width: 100%;
  height: 60vh;
  padding-left: 200px;
  font-size: 24px;
`;
const UserInfo = styled.div`
  width: 800px;
  height: 60vh;
  margin-top: 50px;
  padding-left: 100px;
`;

const MypageButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  font-size: 16px;
  color: white;
  background-color: #774836;
  text-align: center;
  margin-left: 300px;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const StyledTableTd = styled.td`
  border: 1px solid #b5b0b0;
  background: white;
  padding: 3px;
  font-size: 18px;
  &:last-child {
    width: 500px;
  }
`;
const StyledTableTr = styled.tr`
  
  border:1px solid;
  }
`;

const PWmessage = styled.div`
  font-size: 5px;
  color: red;
`;

export default function MyPage() {
  const userID = localStorage.getItem("userID");
  const username = localStorage.getItem("username");
  const userbirth = localStorage.getItem("userbirth");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [chgemail, setChgemail] = useState("");
  const [chgphone, setChgphone] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // setPassword(e.target.password);
    // 비밀번호와 비밀번호 확인 필드 값을 비교하여 상태 업데이트
    setPasswordsMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    // 비밀번호와 비밀번호 확인 필드 값을 비교하여 상태 업데이트
    setPasswordsMatch(password === newConfirmPassword);
  };

  const changeEmail = (e) => {
    const newEmail = e.target.value;
    setChgemail(newEmail);
  };
  const changePhone = (e) => {
    const newPhone = e.target.value;
    setChgphone(newPhone);
  };

  const notify = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다");
    } else if (chgemail == "") {
      alert("이메일을 입력해주세요.");
    } else if (chgphone == "") {
      alert("전화번호를 입력해주세요.");
    } else {
      axios
        .post("http://localhost:4001/mypagechange", {
          ID: userID,
          PW: password,
          PhoneNumber: chgphone,
          Email: chgemail,
        })
        .then((res) => {
          toast("회원정보가 수정되었습니다.");
        })
        .catch(function (err) {
          alert("err는 " + err);
        });
    }
  };

  return (
    <UserInfoBox>
      <UserInfoMenu>
        <SubMenu1>
          <div className="move" style={{ width: "120px", color: "white" }}>
            회원정보 수정
          </div>
        </SubMenu1>
        <SubMenu2>
          <Link
            to="/orderlist"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="move" style={{ width: "120px" }}>
              도서 주문 내역
            </div>
          </Link>
        </SubMenu2>
        <SubMenu3>
          <Link
            to="/booksalelist"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="move" style={{ width: "120px" }}>
              도서 판매 내역
            </div>
          </Link>
        </SubMenu3>
      </UserInfoMenu>
      <UserInfoTitle style={{ paddingTop: "30px" }}>
        <p
          style={{
            paddingLeft: "140px",
          }}
        >
          회원정보 수정
        </p>
        <UserInfo>
          <table>
            <StyledTableTr>
              <StyledTableTd style={{ background: "skyblue", width: "130px" }}>
                이름
              </StyledTableTd>
              <StyledTableTd>{username}</StyledTableTd>
            </StyledTableTr>
            <StyledTableTr>
              <StyledTableTd style={{ background: "skyblue" }}>
                아이디
              </StyledTableTd>
              <StyledTableTd>{userID}</StyledTableTd>
            </StyledTableTr>
            <StyledTableTr>
              <StyledTableTd style={{ background: "skyblue" }}>
                비밀번호
              </StyledTableTd>
              <StyledTableTd>
                <input
                  className="searchbar"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  style={{ width: "450px" }}
                  placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 ~ 20자)"
                ></input>
              </StyledTableTd>
            </StyledTableTr>
            <StyledTableTr>
              <StyledTableTd style={{ background: "skyblue" }}>
                비밀번호 확인
              </StyledTableTd>
              <StyledTableTd>
                <input
                  type="password"
                  className="searchbar"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  style={{ width: "450px" }}
                  placeholder="비밀번호 확인"
                ></input>
                {!passwordsMatch && (
                  <PWmessage>비밀번호가 일치하지 않습니다.</PWmessage>
                )}
              </StyledTableTd>
            </StyledTableTr>
            <StyledTableTr>
              <StyledTableTd style={{ background: "skyblue" }}>
                이메일
              </StyledTableTd>
              <StyledTableTd>
                <input
                  type="email"
                  value={chgemail}
                  onChange={changeEmail}
                  className="searchbar"
                  placeholder="aaaa@naver.com"
                  style={{ width: "450px" }}
                ></input>
              </StyledTableTd>
            </StyledTableTr>
            <StyledTableTr>
              <StyledTableTd style={{ background: "skyblue" }}>
                휴대전화
              </StyledTableTd>
              <StyledTableTd>
                <input
                  type="text"
                  value={chgphone}
                  onChange={changePhone}
                  className="searchbar"
                  placeholder="010-0000-0000"
                  style={{ width: "450px" }}
                ></input>
              </StyledTableTd>
            </StyledTableTr>
            <StyledTableTr>
              <StyledTableTd style={{ background: "skyblue" }}>
                생년월일
              </StyledTableTd>
              <StyledTableTd>{userbirth}</StyledTableTd>
            </StyledTableTr>
            {/* <StyledTableTr>
              <StyledTableTd colSpan={"2"}> */}
            {/* </StyledTableTd>
            </StyledTableTr> */}
          </table>
          <MypageButton onClick={notify}>수정</MypageButton>
          <ToastContainer
            position="bottom-center"
            limit={999}
            closeButton={false}
            autoClose={1000}
            hideProgressBar
          />
        </UserInfo>
      </UserInfoTitle>
    </UserInfoBox>
  );
}
