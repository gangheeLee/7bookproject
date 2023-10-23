import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const OrderMenu = styled.div`
  width: 30%;
  height: 100%;
  padding-top: 50px;
  width: 10%;
  font-size: 16px;
`;

const OrderTitle = styled.div`
width:100%
height:23%;
padding-bottom:50px;  
padding-top: 50px;
  padding-left: 100px;
  font-size: 24px;
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

export default function MyPage() {
  return (
    <OrderMenu>
      <SubMenu1>
        <div className="move" style={{ width: "120px" }}>
          회원정보 수정
        </div>
      </SubMenu1>
      <SubMenu2>
        <Link to="/orderlist">
          <div className="move" style={{ width: "120px" }}>
            도서 주문 내역
          </div>
        </Link>
      </SubMenu2>
      <SubMenu3>
        <Link to="/booksale">
          <div className="move" style={{ width: "120px" }}>
            도서 판매 내역
          </div>
        </Link>
      </SubMenu3>
    </OrderMenu>
  );
}
