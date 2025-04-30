import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import home1 from "../../assets/home1.jpeg";
import home2 from "../../assets/home2.jpeg";
import home3 from "../../assets/home3.jpeg";
import home4 from "../../assets/home4.jpeg";
import home5 from "../../assets/home5.jpeg";
import home6 from "../../assets/home6.jpg";
import home7 from "../../assets/home7.jpg";
import home8 from "../../assets/home8.jpg";
import home9 from "../../assets/home9.jpeg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Container } from "./styles";

export function Carousel() {
  const progressCircle = useRef<SVGCircleElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <img src={home1} alt="Foto 1" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={home2} alt="Foto 2" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={home3} alt="Foto 3" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={home4} alt="Foto 4" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={home5} alt="Foto 5" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={home6} alt="Foto 6" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={home7} alt="Foto 7" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={home8} alt="Foto 8" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={home9} alt="Foto 9" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </Container>
  );
}
