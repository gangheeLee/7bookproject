import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RegisterForm.css";
import "./Modal.css";
import ModalForm from "./ModalForm";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [modal, setModal] = useState(false); //모달창
  const [initialData, setInitialData] = useState(""); //ID중복확인

  //유효화 검사
  const [nameValid, setNameValid] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [confirmPwValid, setConfirmPwValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);
  const [birthValid, setBirthValid] = useState(false);

  const [idCheckValid, setIdCheckValid] = useState(false);
  const [modalCheckValid, setModalCheckValid] = useState(false);

  //회원가입 버튼 활성화 또는 비활성화
  const [notAllow, setNotAllow] = useState(true);

  //정규식 통한 유효성 검사
  const handleName = (e) => {
    setName(e.target.value);
    const regex = /^[가-힣]{2,10}$/;
    if (regex.test(e.target.value)) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };
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
  const handleConfirmPw = (e) => {
    setConfirmPw(e.target.value);
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
    if (regex.test(e.target.value)) {
      setConfirmPwValid(true);
    } else {
      setConfirmPwValid(false);
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    const regex = /^01(?:0|1|[6-9])-\d{4}-\d{4}$/;
    if (regex.test(e.target.value)) {
      setPhoneNumberValid(true);
    } else {
      setPhoneNumberValid(false);
    }
  };
  const handleBirth = (e) => {
    setBirth(e.target.value);
    const regex = /^\d{4}.\d{2}.\d{2}$/;
    if (regex.test(e.target.value)) {
      setBirthValid(true);
    } else {
      setBirthValid(false);
    }
  };

  // id중복체크 구현

  const getData = async () => {
    // const response = await axios.get("http://localhost:4001/users");
    // console.log(response.data)
    // setInitialData(response.data);
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
    if (id.length > 0 && idValid)
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

  //약관동의 체크 후 모달창 닫기 클릭 시 회원가입 활성화
  const agreeButton = () => {
    setModalCheckValid(true);
  };

  //회원가입 버튼 활성화 여부 체크
  useEffect(() => {
    if (
      nameValid &&
      idValid &&
      pwValid &&
      confirmPwValid &&
      emailValid &&
      phoneNumberValid &&
      birthValid &&
      idCheckValid &&
      modalCheckValid
    ) {
      setNotAllow(false); //버튼 비활성화 해제
      return;
    }
    setNotAllow(true);
  }, [
    nameValid,
    idValid,
    pwValid,
    confirmPwValid,
    emailValid,
    phoneNumberValid,
    birthValid,
    idCheckValid,
    modalCheckValid,
  ]);

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
      body: JSON.stringify({ name, id, pw, email, phoneNumber, birth }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    if (
      nameValid &&
      idValid &&
      pwValid &&
      confirmPwValid &&
      emailValid &&
      phoneNumberValid &&
      birthValid &&
      idCheckValid &&
      modalCheckValid
    ) {
      alert("회원가입이 완료되었습니다.");
    } else {
      alert("회원가입에 실패하였습니다.");
    }
  };

  return (
    <div>
      <div className="table">
        <div className="title">회원가입</div>
        <div className="tableWrap">
          <div className="col1">이름</div>
          <div className="col2">
            <input
              className="input"
              type="text"
              value={name}
              onChange={handleName}
              required
            />
          </div>
          <div className="errorMessageWrap">
            {!nameValid && name.length > 0 && (
              <div>한글 2자 이상 입력해주세요. </div>
            )}
          </div>

          <div className="col1">아이디</div>

          <div className="col2">
            <input
              className="input"
              type="text"
              value={id}
              onChange={handleId}
              required
            />
            <button onClick={checkIdDuplicate} className="but1">
              중복확인
            </button>
          </div>

          <div className="errorMessageWrap">
            {!idValid && id.length > 0 && (
              <div>영문, 숫자 조합 4자 이상 입력해주세요. </div>
            )}
          </div>

          <div className="col1">비밀번호</div>
          <div className="col2">
            <input
              className="input"
              type="password"
              value={pw}
              onChange={handlePw}
              placeholder=" 8 ~ 20자의 영문 대/소문자, 숫자, 특수문자 조합"
              required
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>
                영문 대/소문자, 숫자, 특수문자 포함 8자 이상 입력해주세요.{" "}
              </div>
            )}
          </div>

          <div className="col1">비밀번호 확인</div>
          <div className="col2">
            <input
              className="input"
              id="confirmPw"
              type="password"
              value={confirmPw}
              onChange={handleConfirmPw}
              placeholder=" 비밀번호를 한번 더 입력해 주세요."
              required
            />
          </div>
          <div className="errorMessageWrap">
            {confirmPw !== pw && confirmPw.length > 0 && (
              <div>❗비밀번호가 일치하지 않습니다. </div>
            )}
          </div>

          <div className="col1">이메일</div>
          <div className="col2">
            <input
              className="input"
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder=" test12@gmail.com"
              required
            />
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>이메일 형식을 확인해주세요. </div>
            )}
          </div>

          <div className="col1">휴대전화</div>
          <div className="col2">
            <input
              style={{ width: "57%", height: "3.7vh" }}
              className="input"
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              placeholder=" 010-0000-0000"
              required
            />
          </div>
          <div className="errorMessageWrap">
            {!phoneNumberValid && phoneNumber.length > 0 && (
              <div>휴대전화 형식을 확인해주세요. </div>
            )}
          </div>

          <div className="col1">생년월일</div>
          <div className="col2">
            <input
              className="input"
              type="text"
              value={birth}
              onChange={handleBirth}
              placeholder=" 1999.01.01"
              required
            />
          </div>
          <div className="errorMessageWrap">
            {!birthValid && birth.length > 0 && (
              <div>생년월일 형식을 확인해주세요. </div>
            )}
          </div>

          <div className="col1">약관동의</div>
          <div className="col2">
            <button
              onClick={() => {
                setModal(true);
              }}
              className="but2"
              type="button"
            >
              약관보기
            </button>
          </div>
        </div>

        {/* disabled 속성은 notAllow 변수값에 따라 버튼 활성화 또는 비활성화 */}
        <div className="create">
          <button
            onClick={onClickConfirmButton}
            disabled={notAllow}
            className="but3"
            type="submit"
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              회원가입
            </Link>
          </button>
        </div>
      </div>
      <div className="modalfrom">{modal === true ? <ModalForm /> : null}</div>
    </div>
  );
}
