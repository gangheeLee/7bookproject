import Banner from "./component/mainpage/Banner";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import BookOrderList from "./component/bookorderlist/OrderList";
import BookSaleList from "./component/booksalelist/SaleList";
import Login from "./component/pages/login/Login";
import RegisterForm from "./component/pages/register/auth/RegisterForm";
import MyPage from "./component/pages/mypage/MyPage";
import SearchInfo from "./component/booksearch/SearchInfo";
import BookRequestListPage from "./component/page/bookreqlist";
import Bookenroll from "./component/bookenroll/Main";
import Anw from "./component/answer/Answer";
import Qna from "./component/qna/Qna";
import Que from "./component/question/Question";
import BookInfo from "./component/bookInfo/BookInfo";
import History from "./component/history/history";
import Footer from "./component/mainpage/Footer";
import Header from "./component/mainpage/Header";
import Booksale from "./component/booksale/Booksale";
import Bid from "./component/bid/Bid";
import Idsearchs from "./component/pages/login/Idsearch";
import Pwsearch from "./component/pages/login/Pwsearch";
import BookBidForm from "./component/bookbid/BookBidForm";
import QuestoionCorrection from "./component/qna/QuestionCorrection";
import Idfind from "./component/pages/login/Idfind";
import PWfind from "./component/pages/login/Pwfind";

const MainBox = styled.div`
  background: white;
  height: 100%;
`;
const BodyBox = styled.div`
  display: flex;
  margin: 0 auto;
  align-item: center;
`;

function App() {
  return (
    <div className="App">
      {/* // 메인페이지 */}
      <MainBox>
        <Header />
        <BodyBox>
          <Routes>
            <Route path="" element={<Banner />} />
            <Route path="/" element={<Banner />} />
            <Route path="/booksalelist" element={<BookSaleList />} />
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
            <Route path="/booksearch" element={<BookRequestListPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/history" element={<History />} />
            <Route path="/booksale" element={<Booksale />} />
            <Route path="/bid" element={<Bid />} />
            <Route path="/idsearchs" element={<Idsearchs />} />
            <Route path="/pwsearch" element={<Pwsearch />} />
            <Route path="/bookbid" element={<BookBidForm />} />
            <Route
              path="/questioncorrection"
              element={<QuestoionCorrection />}
            />
            <Route path="/idfind" element={<Idfind />} />
            <Route path="/pwfind" element={<PWfind />} />
          </Routes>
        </BodyBox>
        <Footer />
      </MainBox>
    </div>
  );
}

export default App;
