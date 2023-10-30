import React from 'react';
import './history.css'; 

function History() {
  const sellerId = 'hanni316';
  const salesHistory = ['거래 내역', '거래 내역', '거래 내역'];

  return (
    <>
    <div className='page'>
        <div className="title">
          <h1>판매자 히스토리</h1>
        </div>
        <button className="back-button">뒤로가기</button>
            <div className="seller-info ">
              <h2>판매자 정보</h2>
              <div className='container'>
                <div className="info-box">
                    <p>판매자 ID: {sellerId}</p>
                    <p>판매 내역</p>
                    <p>
                        {salesHistory.map((history, index) => (
                          <li key={index}>{history}</li>
                        ))}
                    </p>
                    <p className='star-rating'>별점 평균</p>
                </div>
            </div>
        </div>
    </div></>
  );
}

export default History;





