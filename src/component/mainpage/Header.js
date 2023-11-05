import React from "react";
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

const HeaderContainer = styled.div`
  margin: 0 auto;
  background: #e3cda9;
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
  color: #fff;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    color: #000;
    background-color: #76b6b1;
    font-weight: 700;
  }
`;

function Header() {
  const navigate = useNavigate();

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
            <RightMenuItem
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </RightMenuItem>
          </RightMenuItemContainer>
          {/* <RightMenuItemContainer>
                    <FontAwesomeIcon icon={faRightFromBracket} size="lg" style={{color: "#537479",}} />
                      <RightMenuItem
                          onClick={() => {
                              navigate('/logout');
                          }}>
                          로그아웃
                      </RightMenuItem>
                  </RightMenuItemContainer> */}
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
          <RightMenuItemContainer>
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              style={{ color: "#537479" }}
            />
            <RightMenuItem
              onClick={() => {
                navigate("/mypage");
              }}
            >
              마이페이지
            </RightMenuItem>
          </RightMenuItemContainer>
        </RightMenuContainer>
      </HeaderMenuContainer>
      <hr />
    </HeaderContainer>
  );
}

export default Header;
