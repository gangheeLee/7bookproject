import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RegisterForm.css";
import "./Modal.css";

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
    <>
      <div className="table">
        <div className="title">회원가입</div>
        <div className="tableWrap">
          <div className="col1">
            이름<span>*</span>
          </div>
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

          <div className="col1">
            아이디<span>*</span>
          </div>

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

          <div className="col1">
            비밀번호<span>*</span>
          </div>
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

          <div className="col1">
            비밀번호 확인<span>*</span>
          </div>
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

          <div className="col1">
            이메일<span>*</span>
          </div>
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

          <div className="col1">
            휴대전화<span>*</span>
          </div>
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

          <div className="col1">
            생년월일<span>*</span>
          </div>
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

          <div className="col1">
            약관동의<span>*</span>
          </div>
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
        {modal === true ? (
          <div className="modal">
            <div className="modalBox">
              <div className="modalTitle">
                <h2>이용약관 동의 및 개인정보 처리방침</h2>
              </div>
              <div className="modalArticle">
                <h3>이용약관</h3>
                <div className="articleContent">
                  <h3 className="articleTitle">제 1장 총칙</h3>
                  <article>
                    <h3 className="articleTitle">제 1조 목적</h3>
                    <div className="articleText">
                      본 약관은 주식회사 (이하 "복고서점"이라 함)에서 제공하는
                      서비스(본 약관 제2조에서 정의함)의 이용조건 및 절차에 관한
                      기본적인 사항과 기타 필요한 사항을 규정함을 목적으로
                      합니다.
                    </div>
                  </article>
                  <article>
                    <h3 className="articleTitle">제 2조 용어의 정의</h3>
                    <ol className="articleList">
                      본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.
                      <li>
                        (1)서비스라함은 회사가 운영하는 사이트의 개인유전체검사
                        결과조회 및기타 부가적인 정보 제공 등을 말합니다.
                      </li>
                      <li>
                        (2)회원: 회사가 제공하는 서비스를 이용하기 위해 본
                        이용약관에 동의하고필요한 아이디(ID)와
                        비밀번호(PASSWORD)를 설정하고 개인정보를 제공하는 등
                        소정의 절차를 거쳐 회원등록을 한 자로서, 회사와의
                        이용계약을 체결하고 사이트에서 제공되는 서비스를
                        이용하는 이용자를 말합니다.
                      </li>
                      <li>
                        (3)이용계약: 사이트 이용과 관련하여 회사와 회원간에 체결
                        하는 계약을 말합니다.
                      </li>
                      <li>
                        (4)원 아이디(이하 “ID”) : 회원의 식별과 회원의 서비스
                        이용을 위하여 회원별로 부여하는 고유한 문자와 숫자의
                        조합을 말합니다.
                      </li>
                      <li>
                        (5)비밀번호: 회원이 부여 받은 ID와 일치된 회원임을
                        확인하고 회원의 권익보호를 위하여 회원이 선정한 문자와
                        숫자의 조합을 말합니다.
                      </li>
                      <li>
                        (6)해지: 회원이 이용계약을 해약하는 것을 말합니다.
                      </li>
                      <li>
                        (7)본 조에서 정의된 용어를 제외한 용어의 정의는 일반
                        관행 및 관계법령에 회원이 부여 받은 ID와 일치된 회원임을
                        확인하고 회원의 권익보호를 위하여 회원이 선정한 문자와
                        숫자의 조합을 말합니다.회원이 부여 받은 ID와 일치된
                        회원임을 확인하고 회원의 권익보호를 위하여 회원이 선정한
                        문자와 숫자의 조합을 말합니다.
                      </li>
                      <li>
                        (8) 본 조에서 정의된 용어를 제외한 용어의 정의는 일반
                        관행 및 관계법령에 회원이 부여 받은 ID와 일치된 회원임을
                        확인하고 회원의 권익보호를 위하여 회원이 선정한 문자와
                        숫자의 조합을 말합니다.회원이 부여 받은 ID와 일치된
                        회원임을 확인하고 회원의 권익보호를 위하여 회원이 선정한
                        문자와 숫자의 조합을 말합니다.
                      </li>
                    </ol>
                  </article>
                </div>
                <div className="modalCheck">
                  <input
                    type="checkbox"
                    id="agreeCheckbox"
                    className="agree"
                    required
                  />
                  <label htmlFor="agreeCheckbox">
                    이용약관 동의 및 개인정보 처리방침
                  </label>
                  <button
                    onClick={() => {
                      setModal(false);
                      agreeButton();
                    }}
                    className="modalClose"
                    type="button"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* disabled 속성은 notAllow 변수값에 따라 버튼 활성화 또는 비활성화 */}
        <div className="create">
          <Link to="/">
            <button
              onClick={onClickConfirmButton}
              disabled={notAllow}
              className="but3"
              type="submit"
            >
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
