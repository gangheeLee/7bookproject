import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./List.css";
import { useTable } from "react-table";
import { Link } from "react-router-dom";
import axios from "axios";

const OrderBox = styled.div`
  height: 100%;
  display: flex;
`;

const OrderMenuBox = styled.div`
  padding-left: 250px;
  width: 70%;
  height: 100vh;
  margin: 0 auto;
  align-item: center;
`;

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

const OrderTable = styled.div`
  width: 800px;
  height: 70%;
`;

function BookOrderList() {
  const [orlist, setOrlist] = useState(null);
  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get("http://localhost:4001/getOrderList", {
        params: { OBuyer: userID },
      })
      .then((res) => {
        setOrlist(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <OrderBox>
      <OrderMenu>
        <SubMenu1>
          <Link to="/mypage" style={{ textDecoration: "none", color: "black" }}>
            <div className="move" style={{ width: "120px" }}>
              회원정보 수정
            </div>
          </Link>
        </SubMenu1>
        <SubMenu2>
          <Link
            to="/orderlist"
            style={{ textDecoration: "none", color: "white" }}
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
      </OrderMenu>
      <OrderMenuBox>
        <OrderTitle>도서 주문 내역</OrderTitle>
        <OrderTable>
          <table style={{ height: "150px" }}>
            {/* th부분 => 릴레이션스키마 */}
            <th className="tabletitle" style={{ width: "150px" }}>
              주문일
            </th>
            <th className="tabletitle" style={{ width: "100px" }}>
              판매자
            </th>
            <th className="tabletitle" style={{ width: "400px" }}>
              도서
            </th>
            <th className="tabletitle" style={{ width: "150px" }}>
              거래상태
            </th>
            <th className="tabletitle" style={{ width: "100px" }}>
              별점
            </th>
            <tbody>
              {orlist &&
                orlist.map((item) => (
                  <tr key={item.id}>
                    <td className="tablecontent">{item.OrderDate}</td>
                    <td className="tablecontent">{item.OSeller}</td>
                    <td className="tablecontent">{item.OBookTitle}</td>
                    <td className="tablecontent">{item.OTransactionStatus}</td>
                    <td className="tablecontent">{item.ReviewPoint}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </OrderTable>
      </OrderMenuBox>
    </OrderBox>
  );
}

export default BookOrderList;
