// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// <<<<<<< HEAD
// import "./RegisterForm.css";
// import "./Modal.css";
// import ModalForm from "./ModalForm";
// =======
// import Terms from "./Terms";
// import styled from "styled-components";

// const PageContainer = styled.div`
//   margin: 0 auto;
//   width: 60%;
// `;
// const PageContentTitle = styled.div`
//   padding-top: 0.3rem;
//   padding-left: 1rem;
//   margin: 1rem 0;
//   font-size: 1.6rem;
//   font-weight: 700;
// `;

// const TermsContainer = styled.div`
//   background-color: #ffffff;
//   height: 300px;
//   padding: 0.4rem 1.2rem;
//   overflow-y: scroll;
// `;
// const FormAgreeContainer = styled.div`
// `
// const AgreeTopTextContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 0.5rem;
// `
// const AgreeText = styled.div`
//   margin-top: 0.8rem;
//   font-size: 0.9rem;
//   font-weight: 700;
// `
// const AgreeBottomTextContainer = styled.div`
// `

// const FormRow = styled.div`
//   margin: 0.8rem 0;
// `;
// const FormLabel = styled.div`
//   display: inline-block;
//   width: 30%;
// `;
// const FormInputContainer = styled.div`
//   justify-content: center;
//   display: inline-block;
//   width: 60%;
// `;
// const FormInput = styled.input`
//   background-color: #ffffff;
//   border: 1px solid #999999;
//   border-radius: 0.2rem;
//   padding: 0.4rem 0;
//   width: 98%;
// `;
// const FormInputSecondary = styled.div`
//   padding-left: 0.3rem;
//   font-size: 0.8rem;
//   color: #C33740;
//   font-weight: 700;
// `;

// const FormButtonContainer = styled.div`
//   display: inline-block;
//   width: 10%;
// `;
// const FormButton = styled.button`
//   padding: 0.4rem 0;
//   width: 100%;
//   border: none;
//   border-radius: 0.4rem;
//   background-color: #774836;
//   color: #ffffff;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// const FormSubmitButton = styled.button`
//   background-color: #69433A;
//   border: none;
//   border-radius: 0.4rem;
//   color: #ffffff;
//   margin: 0.8rem 0;
//   padding: 0.4rem 0;
//   width: 100%;
//   height: 4rem;
//   font-size: 1rem;

//   &:hover {
//     background-color: #C33740;
//   }
// `;
// >>>>>>> 8ea1fbb24161bdbe333523a6d13d2ad3ea8ccc96

// export default function RegisterForm() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [id, setId] = useState("");
//   const [pw, setPw] = useState("");
//   const [confirmPw, setConfirmPw] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [birth, setBirth] = useState("");
//   const [modal, setModal] = useState(false); //모달창
//   const [initialData, setInitialData] = useState(""); //ID중복확인

//   //유효화 검사
//   const [nameValid, setNameValid] = useState(false);
//   const [idValid, setIdValid] = useState(false);
//   const [pwValid, setPwValid] = useState(false);
//   const [confirmPwValid, setConfirmPwValid] = useState(false);
//   const [emailValid, setEmailValid] = useState(false);
//   const [phoneNumberValid, setPhoneNumberValid] = useState(false);
//   const [birthValid, setBirthValid] = useState(false);

//   const [idCheckValid, setIdCheckValid] = useState(false);
//   const [modalCheckValid, setModalCheckValid] = useState(false);

//   //회원가입 버튼 활성화 또는 비활성화
//   const [notAllow, setNotAllow] = useState(true);

//   //정규식 통한 유효성 검사
//   const handleName = (e) => {
//     setName(e.target.value);
//     const regex = /^[가-힣]{2,10}$/;
//     if (regex.test(e.target.value)) {
//       setNameValid(true);
//     } else {
//       setNameValid(false);
//     }
//   };
//   const handleId = (e) => {
//     setId(e.target.value);
//     const regex = /^[a-z]+[0-9]{4,20}$/g;
//     if (regex.test(e.target.value)) {
//       setIdValid(true);
//       // console.log(e.target.value)
//       // console.log('통과')
//     } else {
//       setIdValid(false);
//       // console.log(e.target.value)
//     }
//   };
//   const handlePw = (e) => {
//     setPw(e.target.value);
//     const regex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
//     if (regex.test(e.target.value)) {
//       setPwValid(true);
//     } else {
//       setPwValid(false);
//     }
//   };
//   const handleConfirmPw = (e) => {
//     setConfirmPw(e.target.value);
//     const regex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
//     if (regex.test(e.target.value)) {
//       setConfirmPwValid(true);
//     } else {
//       setConfirmPwValid(false);
//     }
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
//     if (regex.test(e.target.value)) {
//       setEmailValid(true);
//     } else {
//       setEmailValid(false);
//     }
//   };
//   const handlePhoneNumber = (e) => {
//     setPhoneNumber(e.target.value);
//     const regex = /^01(?:0|1|[6-9])-\d{4}-\d{4}$/;
//     if (regex.test(e.target.value)) {
//       setPhoneNumberValid(true);
//     } else {
//       setPhoneNumberValid(false);
//     }
//   };
//   const handleBirth = (e) => {
//     setBirth(e.target.value);
//     const regex = /^\d{4}.\d{2}.\d{2}$/;
//     if (regex.test(e.target.value)) {
//       setBirthValid(true);
//     } else {
//       setBirthValid(false);
//     }
//   };

//   // id중복체크 구현

// <<<<<<< HEAD
//   const getData = async () => {
//     // const response = await axios.get("http://localhost:4001/users");
//     // console.log(response.data)
//     // setInitialData(response.data);
//   };
// =======
//   // const getData = async () => {
//   //   const response = await axios.get("http://localhost:4001/users");
//   //   // console.log(response.data)
//   //   setInitialData(response.data);
//   // };
// >>>>>>> 8ea1fbb24161bdbe333523a6d13d2ad3ea8ccc96

//   const checkIdDuplicate = () => {
//     // console.log(response.data)
//     // console.log(id);
//     // return response.data;

//     const data = initialData;
//     // console.log(data)
//     let checker = "a";
//     for (let i = 0; i < data.length; i++) {
//       // console.log(data[i].userId)
//       if (id === data[i].userId) {
//         checker = "b";
//       }
//     }
//     if (id.length > 0 && idValid)
//       checker === "b"
//         ? alert("이미 등록된 ID입니다.")
//         : alert("사용 가능한 ID입니다.");

//     if( checker === 'b'){
//       alert('이미 등록된 ID입니다.')
//     }else{
//       alert('사용 가능한 ID입니다.') && setIdCheckValid(true);
//     }
//     if (checker === "a") {
//       setIdCheckValid(true);
//     }
//   };

//   //약관동의 체크 후 모달창 닫기 클릭 시 회원가입 활성화
//   const agreeButton = () => {
//     setModalCheckValid(true);
//   };

//   //회원가입 버튼 활성화 여부 체크
//   useEffect(() => {
//     if (
//       nameValid &&
//       idValid &&
//       pwValid &&
//       confirmPwValid &&
//       emailValid &&
//       phoneNumberValid &&
//       birthValid &&
//       idCheckValid &&
//       modalCheckValid
//     ) {
//       setNotAllow(false); //버튼 비활성화 해제
//       return;
//     }
//     setNotAllow(true);
//   }, [
//     nameValid,
//     idValid,
//     pwValid,
//     confirmPwValid,
//     emailValid,
//     phoneNumberValid,
//     birthValid,
//     idCheckValid,
//     modalCheckValid,
//   ]);

//   // useEffect(() => {
//   //   getData();
//   // }, []);

//   //유효성 검사, id중복체크, 약관동의가 모두 통과되면 회원가입 버튼 클릭 후 회원가입 완료
//   const onClickConfirmButton = () => {
//     fetch("/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, id, pw, email, phoneNumber, birth }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       });

//     if (
//       nameValid &&
//       idValid &&
//       pwValid &&
//       confirmPwValid &&
//       emailValid &&
//       phoneNumberValid &&
//       birthValid &&
//       idCheckValid &&
//       modalCheckValid
//     ) {
//       alert("회원가입이 완료되었습니다.");
//     } else {
//       alert("회원가입에 실패하였습니다.");
//     }
//   };

//   return (
// <<<<<<< HEAD
//     <div>
//       <div className="table">
//         <div className="title">회원가입</div>
//         <div className="tableWrap">
//           <div className="col1">이름</div>
//           <div className="col2">
//             <input
//               className="input"
//               type="text"
//               value={name}
//               onChange={handleName}
//               required
//             />
//           </div>
//           <div className="errorMessageWrap">
//             {!nameValid && name.length > 0 && (
//               <div>한글 2자 이상 입력해주세요. </div>
//             )}
//           </div>

//           <div className="col1">아이디</div>

//           <div className="col2">
//             <input
//               className="input"
//               type="text"
//               value={id}
//               onChange={handleId}
//               required
//             />
//             <button onClick={checkIdDuplicate} className="but1">
//               중복확인
//             </button>
//           </div>

//           <div className="errorMessageWrap">
//             {!idValid && id.length > 0 && (
//               <div>영문, 숫자 조합 4자 이상 입력해주세요. </div>
//             )}
//           </div>

//           <div className="col1">비밀번호</div>
//           <div className="col2">
//             <input
//               className="input"
//               type="password"
//               value={pw}
//               onChange={handlePw}
//               placeholder=" 8 ~ 20자의 영문 대/소문자, 숫자, 특수문자 조합"
//               required
//             />
//           </div>
//           <div className="errorMessageWrap">
// =======
//     <PageContainer>
//       <PageContentTitle>회원가입</PageContentTitle>
//       <TermsContainer>
//         <Terms />
//       </TermsContainer>
//       <FormRow>
//         <AgreeTopTextContainer>
//           <input
//             type="checkbox"
//             id="agreeCheckbox"
//             required
//           />
//           <div>
//           이용약관 및 개인정보처리방침에 동의합니다.
//           </div>
//           <FormInputSecondary>
//           </FormInputSecondary>
//         </AgreeTopTextContainer>
//       </FormRow>
//       <FormRow>
//         <FormLabel>
//           이름
//         </FormLabel>
//         <FormInputContainer>
//           <FormInput
//             type="text"
//             value={name}
//             onChange={handleName}
//             required
//           />
//           <FormInputSecondary>
//             {!nameValid && name.length > 0 && (
//               <div>한글 2자 이상 입력해주세요. </div>
//             )}
//           </FormInputSecondary>
//         </FormInputContainer>
//       </FormRow>
//       <FormRow>
//         <FormLabel>
//           아이디
//         </FormLabel>
//         <FormInputContainer>
//           <FormInput
//             type="text"
//             value={id}
//             onChange={handleId}
//             required
//           />
//           <FormInputSecondary>
//             {!idValid && id.length > 0 && (
//               <div>영문, 숫자 조합 4자 이상 입력해주세요. </div>
//             )}
//           </FormInputSecondary>
//         </FormInputContainer>
//         <FormButtonContainer>
//           <FormButton onClick={checkIdDuplicate}>
//             중복확인
//           </FormButton>
//         </FormButtonContainer>
//       </FormRow>
//       <FormRow>
//         <FormLabel>
//           비밀번호
//         </FormLabel>
//         <FormInputContainer>
//           <FormInput
//             type="password"
//             value={pw}
//             onChange={handlePw}
//             placeholder=" 8 ~ 20자의 영문 대/소문자, 숫자, 특수문자 조합"
//             required
//           />
//           <FormInputSecondary>
// >>>>>>> 8ea1fbb24161bdbe333523a6d13d2ad3ea8ccc96
//             {!pwValid && pw.length > 0 && (
//               <div>
//                 영문 대/소문자, 숫자, 특수문자 포함 8자 이상 입력해주세요.{" "}
//               </div>
//             )}
//           </div>

//           <div className="col1">비밀번호 확인</div>
//           <div className="col2">
//             <input
//               className="input"
//               id="confirmPw"
//               type="password"
//               value={confirmPw}
//               onChange={handleConfirmPw}
//               placeholder=" 비밀번호를 한번 더 입력해 주세요."
//               required
//             />
//           </div>
//           <div className="errorMessageWrap">
//             {confirmPw !== pw && confirmPw.length > 0 && (
//               <div>❗비밀번호가 일치하지 않습니다. </div>
//             )}
//           </div>

//           <div className="col1">이메일</div>
//           <div className="col2">
//             <input
//               className="input"
//               type="email"
//               value={email}
//               onChange={handleEmail}
//               placeholder=" test12@gmail.com"
//               required
//             />
//           </div>
//           <div className="errorMessageWrap">
//             {!emailValid && email.length > 0 && (
//               <div>이메일 형식을 확인해주세요. </div>
//             )}
//           </div>

//           <div className="col1">휴대전화</div>
//           <div className="col2">
//             <input
//               style={{ width: "57%", height: "3.7vh" }}
//               className="input"
//               type="text"
//               value={phoneNumber}
//               onChange={handlePhoneNumber}
//               placeholder=" 010-0000-0000"
//               required
//             />
//           </div>
//           <div className="errorMessageWrap">
//             {!phoneNumberValid && phoneNumber.length > 0 && (
//               <div>휴대전화 형식을 확인해주세요. </div>
//             )}
//           </div>

//           <div className="col1">생년월일</div>
//           <div className="col2">
//             <input
//               className="input"
//               type="text"
//               value={birth}
//               onChange={handleBirth}
//               placeholder=" 1999.01.01"
//               required
//             />
//           </div>
//           <div className="errorMessageWrap">
//             {!birthValid && birth.length > 0 && (
//               <div>생년월일 형식을 확인해주세요. </div>
//             )}
//           </FormInputSecondary>
//         </FormInputContainer>
//       </FormRow>

//           <div className="col1">약관동의</div>
//           <div className="col2">
//             <button
//               onClick={() => {
//                 setModal(true);
//               }}
//               className="but2"
//               type="button"
//             >
//               약관보기
//             </button>
//           </div>
//         </div>

//         {/* disabled 속성은 notAllow 변수값에 따라 버튼 활성화 또는 비활성화 */}
//         <div className="create">
//           <button
//             onClick={onClickConfirmButton}
//             disabled={notAllow}
//             className="but3"
//             type="submit"
//           >
//             <Link to="/" style={{ color: "white", textDecoration: "none" }}>
//               회원가입
//             </Link>
//           </button>
//         </div>
//       </div>
//       <div className="modalfrom">{modal === true ? <ModalForm /> : null}</div>
//     </div>
//   );
// }
