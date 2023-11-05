import styled from "styled-components";

const FooterBox = styled.div`
  background: #f7f7f7;
`;

const FooterContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  font-size: 14px;
  color: var(--text);
`;

const Footer = () => {
  return (
    <FooterBox>
      <hr />
      <FooterContainer>
        대표이사 : 홍길동 | 서울특별시 종로구 종로 1234 | 사업자등록번호 :
        000-00-00000 <br />
        대표전화 : 1544-0000(발신자 부담전화) | FAX : 0000-000-0000(지역번호
        공통) | 서울특별시 통신판매업신고번호 : 제 000호
        <br />
        이메일 : aaaaaa@naver.com
      </FooterContainer>
    </FooterBox>
  );
};

export default Footer;
