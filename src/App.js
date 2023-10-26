import Logo from "./component/mainpage/LogoAndMenu";
import Banner from "./component/mainpage/Banner";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./component/mainpage/Footer";
import styled from "styled-components";
import BookOrderList from "./component/bookorderlist/OrderList";
import BookSaleList from "./component/booksalelist/SaleList";
import Login from "./component/pages/login/Login";
import RegisterForm from "./component/pages/register/RegisterForm";
import MyPage from "./component/pages/mypage/MyPage";
import SearchInfo from "./component/booksearch/SearchInfo";
import BookRequestListPage from "./component/page/bookreqlist";
import Bookenroll from "./component/bookenroll/Main";
import Anw from "./component/answer/Answer";
import Qna from "./component/qna/Qna";
import Que from "./component/question/Question";
import BookInfo from "./component/bookInfo/BookInfo";

const MainBox = styled.div`
  background: #e3cda9;
  height: 100%;
`;

function App() {
  return (
    <div className="App" style={{ background: "#e3cda9" }}>
      {/* // 메인페이지 */}
      <MainBox>
        <Logo />
        <Routes>
          <Route path="" element={<Banner />} />
          <Route path="/" element={<Banner />} />
          <Route path="/booksale" element={<BookSaleList />} />
          <Route path="/orderlist" element={<BookOrderList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/searchinfo/:title" element={<SearchInfo />} />
          <Route path="/bookenroll" element={<Bookenroll />} />
          <Route path="/anw" element={<Anw />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/que" element={<Que />} />
          <Route path="/bookinfo" element={<BookInfo />} />
          <Route path="booksearch" element={<BookRequestListPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </MainBox>
    </div>
  );
}

export default App;
