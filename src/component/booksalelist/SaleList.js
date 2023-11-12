import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./List.css";
import { useTable } from "react-table";
import { Link } from "react-router-dom";

const SaleBox = styled.div`
  height: 100%;
  display: flex;
`;
const SaleMenuBox = styled.div`
  padding-left: 250px;
  width: 70%;
  height: 100vh;
  margin: 0 auto;
  align-item: center;
`;

const SaleMenu = styled.div`
  width: 30%;
  height: 100%;
  padding-top: 50px;
  width: 10%;
  font-size: 16px;
`;

const SaleTitle = styled.div`
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
  color: #69433a;
  background: #76b6b1;
  text-align: center;
  border: 1px solid white;
`;
const SubMenu3 = styled.div`
  width: 150px;
  height: 30px;
  color: white;
  border-bottom-right-radius: 10px 10px;
  background: #76b6b1;
  text-align: center;
  border: 1px solid white;
`;

const SaleTable = styled.div`
  width: 800px;
  height: 70%;
  //   border: 1px solid;
`;

function BookSaleList() {
  const [salelist, setSalelist] = useState(null);
  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get("http://localhost:4001/getSaleList", { params: { SLBuyer: userID } })
      .then((res) => {
        setSalelist(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SaleBox>
      <SaleMenu>
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
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="move" style={{ width: "120px" }}>
              도서 판매 내역
            </div>
          </Link>
        </SubMenu3>
      </SaleMenu>
      <SaleMenuBox>
        <SaleTitle>도서 판매 내역</SaleTitle>
        <SaleTable>
          <table style={{ border: "1px solid black", height: "100px" }}>
            {/* th부분 => 릴레이션스키마 */}
            <th className="tabletitle" style={{ width: "150px" }}>
              등록일
            </th>
            <th className="tabletitle" style={{ width: "100px" }}>
              구매자
            </th>
            <th className="tabletitle" style={{ width: "400px" }}>
              도서
            </th>
            <th className="tabletitle" style={{ width: "150px" }}>
              거래상태
            </th>
            <th className="tabletitle" style={{ width: "100px" }}>
              비고
            </th>
            <tbody>
              {salelist &&
                salelist.map((item) => (
                  <tr key={item.id} style={{ border: "1px solid" }}>
                    <td className="tablecontent">{item.SLRegisDate}</td>
                    <td className="tablecontent">{item.SLSeller}</td>
                    <td className="tablecontent">{item.SLBookTitle}</td>
                    <td className="tablecontent">{item.SLTransactionStatus}</td>
                    <td className="tablecontent">{item.SLNote}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </SaleTable>
      </SaleMenuBox>
    </SaleBox>
  );
}

export default BookSaleList;
