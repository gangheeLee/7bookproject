import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const UserInfoBox = styled.div`
  height: 100vh;
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
  width:100%
  height:60vh;
  padding-top: 50px;
  padding-left: 100px;
  font-size: 24px;
  `;
const UserInfo = styled.div`
  width: 800px;
  height: 60vh;
  margin-top: 50px;
  margin-right: 100px;
`;

const MypageButton = styled.div`
  width: 100px;
  border: none;
  color: white;
  background-color: #774836;
  text-align: center;
  border-radius: 10px;
`;

export default function MyPage() {
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
            to="/booksale"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="move" style={{ width: "120px" }}>
              도서 판매 내역
            </div>
          </Link>
        </SubMenu3>
      </UserInfoMenu>
      <UserInfoTitle>
        회원정보 수정
        <UserInfo>
          <table style={{}}>
            <tr>
              <td>이름</td>
              <td style={{ width: "400px" }}>홍길동</td>
            </tr>
            <tr>
              <td>아이디</td>
              <td>aaaa1234</td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input type="password" style={{ width: "300px" }}></input>
              </td>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td>
                <input type="password" style={{ width: "300px" }}></input>
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <input type="email" style={{ width: "300px" }}></input>
              </td>
            </tr>
            <tr>
              <td>휴대전화</td>
              <td>
                <input type="text" style={{ width: "300px" }}></input>
              </td>
            </tr>
            <tr>
              <td>생년월일</td>
              <td>1999.01.01</td>
            </tr>
            <tr>
              <td colSpan={"2"}>
                <MypageButton>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    수정
                  </Link>
                </MypageButton>
              </td>
            </tr>
          </table>
        </UserInfo>
      </UserInfoTitle>
    </UserInfoBox>
  );
}
