import React from "react";

const ModalForm = () => {
  return (
    <div className="modal">
      <label>
        <input type="checkbox"></input>약관동의
      </label>
    </div>
  );
};

export default ModalForm;

// {
//   modal === true ? (
//     <div className="modal">
//       <div className="modalBox">
//         <div className="modalTitle">
//           <h2>이용약관 동의 및 개인정보 처리방침</h2>
//         </div>
//         <div className="modalArticle">
//           <h3>이용약관</h3>
//           <div className="articleContent">
//             <h3 className="articleTitle">제 1장 총칙</h3>
//             <article>
//               <h3 className="articleTitle">제 1조 목적</h3>
//               <div className="articleText">
//                 본 약관은 주식회사 (이하 "복고서점"이라 함)에서 제공하는
//                 서비스(본 약관 제2조에서 정의함)의 이용조건 및 절차에 관한
//                 기본적인 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
//               </div>
//             </article>
//             <article>
//               <h3 className="articleTitle">제 2조 용어의 정의</h3>
//               <ol className="articleList">
//                 본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.
//                 <li>
//                   (1)서비스라함은 회사가 운영하는 사이트의 개인유전체검사
//                   결과조회 및기타 부가적인 정보 제공 등을 말합니다.
//                 </li>
//                 <li>
//                   (2)회원: 회사가 제공하는 서비스를 이용하기 위해 본 이용약관에
//                   동의하고필요한 아이디(ID)와 비밀번호(PASSWORD)를 설정하고
//                   개인정보를 제공하는 등 소정의 절차를 거쳐 회원등록을 한
//                   자로서, 회사와의 이용계약을 체결하고 사이트에서 제공되는
//                   서비스를 이용하는 이용자를 말합니다.
//                 </li>
//                 <li>
//                   (3)이용계약: 사이트 이용과 관련하여 회사와 회원간에 체결 하는
//                   계약을 말합니다.
//                 </li>
//                 <li>
//                   (4)원 아이디(이하 “ID”) : 회원의 식별과 회원의 서비스 이용을
//                   위하여 회원별로 부여하는 고유한 문자와 숫자의 조합을 말합니다.
//                 </li>
//                 <li>
//                   (5)비밀번호: 회원이 부여 받은 ID와 일치된 회원임을 확인하고
//                   회원의 권익보호를 위하여 회원이 선정한 문자와 숫자의 조합을
//                   말합니다.
//                 </li>
//                 <li>(6)해지: 회원이 이용계약을 해약하는 것을 말합니다.</li>
//                 <li>
//                   (7)본 조에서 정의된 용어를 제외한 용어의 정의는 일반 관행 및
//                   관계법령에 회원이 부여 받은 ID와 일치된 회원임을 확인하고
//                   회원의 권익보호를 위하여 회원이 선정한 문자와 숫자의 조합을
//                   말합니다.회원이 부여 받은 ID와 일치된 회원임을 확인하고 회원의
//                   권익보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다.
//                 </li>
//                 <li>
//                   (8) 본 조에서 정의된 용어를 제외한 용어의 정의는 일반 관행 및
//                   관계법령에 회원이 부여 받은 ID와 일치된 회원임을 확인하고
//                   회원의 권익보호를 위하여 회원이 선정한 문자와 숫자의 조합을
//                   말합니다.회원이 부여 받은 ID와 일치된 회원임을 확인하고 회원의
//                   권익보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다.
//                 </li>
//               </ol>
//             </article>
//           </div>
//           <div className="modalCheck">
//             <input
//               type="checkbox"
//               // id="agreeCheckbox"
//               // className="agree"
//               // required
//             />
//             {/* <label htmlFor="agreeCheckbox" style={{ width: "300px" }}>
//               이용약관 동의 및 개인정보 처리방침
//             </label> */}
//             <button
//               onClick={() => {
//                 setModal(false);
//                 agreeButton();
//               }}
//               className="modalClose"
//               type="button"
//             >
//               닫기
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : null;
// }