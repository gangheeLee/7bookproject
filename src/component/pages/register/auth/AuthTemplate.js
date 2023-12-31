import React from "react";
import styled from "styled-components";
import palette from "../lib/styles/palette";
import { Link } from "react-router-dom";

/**
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.cyan[7]};
  /* flex로 내부 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  align-item: center;
  margin: 0 auto;
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    a {
      text-decoration: none;
      color: black;
    }
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  border-radius: 2px;
  background: white;
  padding: 2rem;
  width: 360px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">REACTERS</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
