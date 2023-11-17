import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faTableList,
  faCircleQuestion,
  faRightToBracket,
  faRightFromBracket,
  faUser,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const HeaderContainer = styled.div`
  // margin: 0 auto;
  background: #e2e2e2;
`;
const HeaderMenuContainer = styled.div`
  display: flex;
  max-height: 80px;
`;

const TitleContainer = styled.div`
  flex: 1;
`;
const TitleItemContainer = styled.div`
  max-width: 100px;
`;
const TitleItem = styled.img`
  width: 100%;
  cursor: pointer;
`;

const MainMenuContainer = styled.div`
  display: flex;
  flex: 5;
  margin-right: 600px;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  // margin-right: 3rem;
`;
const MainMenuItemContainer = styled.div`
  margin: 0 0.8rem;
`;
const MainMenuItem = styled.span`
  margin-left: 0.2rem;
  color: #774836;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    color: #c33740;
    background-color: #d7a278;
    font-weight: 700;
    // text-decoration: underline;
  }
`;

const RightMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-right: 50px;
`;
const RightMenuItemContainer = styled.div`
  margin: 0 0.5rem;
`;
const RightMenuItem = styled.span`
  margin-left: 0.2rem;
  color: black;
  cursor: pointer;
  font-size: 0.4rem;

  &:hover {
    color: #000;
    background-color: #76b6b1;
    font-weight: 700;
  }
`;

function Header() {
  const navigate = useNavigate();
  const userID = localStorage.getItem("userID");
  const token = localStorage.getItem("token");
  const posts = localStorage.getItem("writer");

  const Log = () => {
    if (token == 1) {
      return (
        <RightMenuItem htMenuItem onClick={Logout}>
          로그아웃
        </RightMenuItem>
      );
    } else {
      return (
        <RightMenuItem
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </RightMenuItem>
      );
    }
  };
  const Mypageinfo = () => {
    if (token == 1) {
      return (
        <RightMenuItemContainer>
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            style={{ color: "#537479" }}
          />
          <RightMenuItem onClick={MypageClick}>마이페이지</RightMenuItem>
        </RightMenuItemContainer>
      );
    } else {
      return (
        <RightMenuItemContainer style={{ display: "none" }}>
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            style={{ color: "#537479" }}
          />
          <RightMenuItem>마이페이지</RightMenuItem>
        </RightMenuItemContainer>
      );
    }
  };

  const Register = () => {
    if (token == 1) {
      return (
        <RightMenuItemContainer style={{ display: "none" }}>
          <FontAwesomeIcon
            icon={faCircleUser}
            size="lg"
            style={{ color: "#537479" }}
          />
          <RightMenuItem
            onClick={() => {
              navigate("/register");
            }}
          >
            회원가입
          </RightMenuItem>
        </RightMenuItemContainer>
      );
    } else {
      return (
        <RightMenuItemContainer>
          <FontAwesomeIcon
            icon={faCircleUser}
            size="lg"
            style={{ color: "#537479" }}
          />
          <RightMenuItem
            onClick={() => {
              navigate("/register");
            }}
          >
            회원가입
          </RightMenuItem>
        </RightMenuItemContainer>
      );
    }
  };

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    alert("로그아웃");
    navigate("/");
  };

  //////// 마이페이지를 클릭시 ID값을 주고 이름과 생년월일 받아온다. ////////

  const MypageClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/mypage", { ID: userID })
      .then((res) => {
        if (token == 1) {
          localStorage.setItem("username", res.data[0].Name);
          localStorage.setItem("userbirth", res.data[0].Birth);
          const Name = localStorage.getItem("username");
          const Birth = localStorage.getItem("userbirth");
          navigate("/mypage");
        } else {
          localStorage.removeItem("username");
          localStorage.setItem("userbirth");
        }
      })
      .catch((err) => {
        alert("error는 " + err);
        console.log(err);
      });
  };

  ////////////// Q&A 클릭시데이터 받아서 화면에 뿌리기 ////////////////

  // const qnapage = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get("http://localhost:4001/qna", { params: { QID: userID } })
  //     .then((res) => {
  //       console.log(res.data);
  //       let writerdata = res.data;
  //       localStorage.setItem("writer", JSON.stringify(writerdata));
  //       console.log(writerdata);
  //       const Posts = localStorage.getItem("writer");
  //       console.log(Posts);
  //       navigate("/qna");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <HeaderContainer>
      <HeaderMenuContainer>
        <TitleContainer>
          <TitleItemContainer>
            <TitleItem
              src={process.env.PUBLIC_URL + "/img/logo_image_2.png"}
              alt="복고서점"
              onClick={() => {
                navigate("/");
              }}
            ></TitleItem>
          </TitleItemContainer>
        </TitleContainer>

        <MainMenuContainer>
          <MainMenuItemContainer>
            <FontAwesomeIcon
              icon={faBook}
              size="lg"
              style={{ color: "#69433A" }}
            />
            <MainMenuItem
              onClick={() => {
                navigate("/bookenroll");
              }}
            >
              도서등록
            </MainMenuItem>
          </MainMenuItemContainer>
          <MainMenuItemContainer>
            <FontAwesomeIcon
              icon={faTableList}
              size="lg"
              style={{ color: "#69433A" }}
            />
            <MainMenuItem
              onClick={() => {
                navigate("/booksearch");
              }}
            >
              구매요청 목록
            </MainMenuItem>
          </MainMenuItemContainer>
          <MainMenuItemContainer>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              size="lg"
              style={{ color: "#69433A" }}
            />
            <MainMenuItem
              onClick={() => {
                navigate("/qna");
              }}
            >
              Q&A
            </MainMenuItem>
          </MainMenuItemContainer>
        </MainMenuContainer>

        <RightMenuContainer>
          <RightMenuItemContainer>
            <FontAwesomeIcon
              icon={faRightToBracket}
              size="lg"
              style={{ color: "#537479" }}
            />
            <Log /> {/* 로그인/로그아웃 */}
          </RightMenuItemContainer>
          <Register /> {/* 회원가입 */}
          <Mypageinfo /> {/* 마이페이지 */}
        </RightMenuContainer>
      </HeaderMenuContainer>
    </HeaderContainer>
  );
}

export default Header;
