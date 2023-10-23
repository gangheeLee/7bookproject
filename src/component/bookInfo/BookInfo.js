import React from 'react';
import './BookInfo.css'

function BookInfo() {
  // 여기서 데이터베이스로부터 책 정보를 가져오는 코드를 작성


  return (
    <div className="book-container">
      <img src="./img/bookimg.jpg" alt="도서 이미지" className="book-image" />
      <div className="book-info">
      <p className="book-i">책정보</p>
      <p className="book-title">제목 </p>
      <p className="book-realt">마녀가 우글우글</p>
      <p className="book-author">저자 </p>
      <p className="book-reala">심상곤</p>
      <p className="book-publisher">출판사 </p>
      <p className="book-realp">유진</p>
    </div>
    </div>
  );
}

export default BookInfo;