import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import Search from "./Search";
import Footer from "./Footer";

const BannerBox = styled.div`
  background: #e3cda9;
  height: 60vh;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 30px;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <BannerBox style={{ textAlign: "center", fontSize: "32px" }}>
        베스트 셀러
        {/* <Carousel> */}
        <Slider {...settings} style={{ textDecoration: "none" }}>
          <div>
            <img
              src="asset/bestseller5.png"
              alt="로터스 택시에는 특별한 손님이 탑니다"
              style={{ paddingTop: "20px", width: "200px", height: "350px" }}
            />
          </div>
          <div>
            <img
              src="asset/bestseller1.png"
              alt="트렌드 코리아 2024"
              style={{ paddingTop: "20px", width: "200px", height: "350px" }}
            />
          </div>
          <div>
            <img
              src="asset/bestseller2.png"
              alt="퓨처 셀프"
              style={{ paddingTop: "20px", width: "200px", height: "350px" }}
            />
          </div>
          <div>
            <img
              src="asset/bestseller3.png"
              alt="기적의 자세요정"
              style={{ paddingTop: "20px", width: "200px", height: "350px" }}
            />
          </div>
          <div>
            <img
              src="asset/bestseller4.png"
              alt="시대예보: 핵개인의 시대"
              style={{ paddingTop: "20px", width: "200px", height: "350px" }}
            />
          </div>
          {/* 추가 이미지 슬라이드 항목들 */}
        </Slider>
      </BannerBox>
      <Search />
      <Footer />
    </div>
  );
}

export default Banner;
