import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [initialData, setInitialData] = useState(""); //ID중복확인

  //유효화 검사
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [idCheckValid, setIdCheckValid] = useState(false);

  //회원가입 버튼 활성화 또는 비활성화
  const [notAllow, setNotAllow] = useState(true);

  //정규식 통한 유효성 검사
  const handleId = (e) => {
    setId(e.target.value);
    const regex = /^[a-z]+[0-9]{4,20}$/g;
    if (regex.test(e.target.value)) {
      setIdValid(true);
      // console.log(e.target.value)
      // console.log('통과')
    } else {
      setIdValid(false);
      // console.log(e.target.value)
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  // id중복체크 구현

  const getData = async () => {
    const response = await axios.get("http://localhost:4001/users");
    // console.log(response.data)
    setInitialData(response.data);
  };

  const checkIdDuplicate = () => {
    // console.log(response.data)
    // console.log(id);
    //return response.data;

    const data = initialData;
    // console.log(data)
    let checker = "a";
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].userId)
      if (id === data[i].userId) {
        checker = "b";
      }
    }

    checker === "b"
      ? alert("이미 등록된 ID입니다.")
      : alert("사용 가능한 ID입니다.");

    // if( checker === 'b'){
    //   alert('이미 등록된 ID입니다.')
    // }else{
    //   alert('사용 가능한 ID입니다.') && setIdCheckValid(true);
    // }
    if (checker === "a") {
      setIdCheckValid(true);
    }
  };

  //회원가입 버튼 활성화 여부 체크
  useEffect(() => {
    if (idValid && pwValid && idCheckValid) {
      setNotAllow(false); //버튼 비활성화 해제
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid, idCheckValid]);

  useEffect(() => {
    getData();
  }, []);

  //유효성 검사, id중복체크, 약관동의가 모두 통과되면 회원가입 버튼 클릭 후 회원가입 완료
  const onClickConfirmButton = () => {
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, pw }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    if (idValid && pwValid && idCheckValid) {
      alert("회원가입이 완료되었습니다.");
    } else {
      alert("회원가입에 실패하였습니다.");
    }
  };

  return (
    <>
      <div className="loginTable">
        <div className="title">로그인</div>
        <div className="loginTableWrap">
          <div className="loginWrap">
            <div className="loginInput">
              <input
                className="input"
                type="text"
                value={id}
                onChange={handleId}
                placeholder="  아이디"
                required
              />
            </div>

            <div className="loginInput">
              <input
                className="input"
                type="password"
                value={pw}
                onChange={handlePw}
                placeholder="  비밀번호"
                required
              />
            </div>
            {/* disabled 속성은 notAllow 변수값에 따라 버튼 활성화 또는 비활성화 */}
            <div className="btnContent">
              <div className="b1">
                <button
                  onClick=""
                  disabled={notAllow}
                  className="logBtn1"
                  type="submit"
                >
                  <Link to="/">로그인</Link>
                </button>
              </div>

              <div className="secondBtn">
                <div className="b2">
                  <button onClick="" className="logBtn2" type="button">
                    <Link to="/findidpw">ID/PW 찾기</Link>
                  </button>
                </div>
                <div className="b3">
                  <button onClick="" className="logBtn3" type="button">
                    <Link to="/register">회원가입</Link>
                  </button>
                </div>
              </div>
              <div className="b4">
                <img
                  className="nav_image"
                  src="img/naver.png"
                  style={{ width: "2.3%", position: "absolute", left: "0.5%" }}
                  alt=""
                />
                <button onClick="" className="logBtn4" type="button">
                  <div className="snsText">네이버 아이디로 로그인</div>
                </button>
              </div>
              <div className="b5">
                <img
                  className="kao_image"
                  src="img/kakao.png"
                  style={{
                    width: "3.8%",
                    position: "absolute",
                    top: "65.5%",
                    left: "-0.3%",
                  }}
                  alt=""
                />
                <button onClick="" className="logBtn5" type="button">
                  <div className="snsText">카카오 아이디로 로그인</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
