import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Logo.css";

const Empty = styled.div`
  width: 200px;
`;

const Box = styled.div`
  margin: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  justify-content: space-between;
  display: flex;
  background: #e3cda9;
`;

const Title = styled.div`
    font-size: 50px;
    text-align: center;
  }
`;

const User = styled.div`
  padding-right: 50px;
  padding-top: 25px;
  width: 200px;
  font-size: 12px;
  color: white;
  margin-left: 0;
  justify-content: space-between;
  display: flex;
`;

const Menu = styled.div`
  padding: 30px 100px;
  font-size: 20px;
  margin-left: 0;
  justify-content: space-between;
  display: flex;
  color: #69433a;
  background: #e3cda9;
`;

function Logo() {
  return (
    <>
      {/* 사이트 제목 , 로그인 회원가입 마이페이지 링크 구성 */}
      <Box>
        <Empty>{/*여택 맞추기용*/}</Empty>
        <Title>
          {/* <Link to="/"> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src="asset/logo_image.png"
              style={{
                width: "200px",
                marginTop: "-30px",
                marginBottom: "-50px",
                cursor: "pointer",
              }}
            />
          </Link>
        </Title>
        <User>
          <div className="move" style={{ width: "50px" }}>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "white" }}
            >
              로그인
            </Link>
          </div>
          <div className="move" style={{ width: "60px" }}>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "white" }}
            >
              회원가입
            </Link>
          </div>
          <div className="move" style={{ width: "70px" }}>
            <Link
              to={"/mypage"}
              style={{ textDecoration: "none", color: "white" }}
            >
              마이페이지
            </Link>
          </div>
        </User>
      </Box>
      <hr />
      {/* 상단 메뉴 링크 구성 */}
      <Menu>
        <Link
          to={"/bookenroll"}
          style={{ textDecoration: "none", color: "black" }}
        >
          도서 등록
        </Link>
        <div className="move" style={{ width: "100px" }}>
          <Link
            to={"/booksearch"}
            style={{ textDecoration: "none", color: "black" }}
          >
            도서 조회
          </Link>
        </div>
        <div className="move" style={{ width: "200px" }}>
          <Link
            to={"/bookinfo"}
            style={{ textDecoration: "none", color: "black" }}
          >
            응찰 현황 / 가격 비교
          </Link>
        </div>
        <div className="move" style={{ width: "100px" }}>
          <Link to={"/qna"} style={{ textDecoration: "none", color: "black" }}>
            Q&A
          </Link>
        </div>
      </Menu>
      <hr />
    </>
  );
}

export default Logo;
