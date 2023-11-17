import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const IdsearchBox = styled.div`
  height: 66.5vh;
  margin: 0 auto;
  justify-content: center;
`;

const IDs = styled.div`
  width: 299px;
  height: 300px;
  margin-top: 70px;
  border: 1px solid;
  border-radius: 20px;
  text-align: center;
`;
const IDFind = styled.div`
  text-align: center;
  padding: 100px 40px;
  font-size: 25px;
`;

function Idfind() {
  const findname = localStorage.getItem("findname");
  const findbirth = localStorage.getItem("findbirth");
  const findphone = localStorage.getItem("findphone");
  const [userID, setUserID] = useState("");
  console.log(findname);
  console.log(findbirth);
  console.log(findphone);
  useEffect(() => {
    axios
      .post("http://localhost:4001/idfind", {
        Name: findname,
        Birth: findbirth,
        PhoneNumber: findphone,
      })
      .then((res) => {
        console.log(res.data);
        setUserID(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <IdsearchBox>
      <IDs>
        <IDFind>
          {findname}님의 아이디는 {userID}입니다.
        </IDFind>
      </IDs>
    </IdsearchBox>
  );
}

export default Idfind;
