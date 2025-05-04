import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import { Container, SlideImage } from "./styles";

import home1 from "../../assets/home1.jpeg";
import home2 from "../../assets/home2.jpeg";
import home3 from "../../assets/home3.jpeg";
import home4 from "../../assets/home4.jpeg";
import home5 from "../../assets/home5.jpeg";
import home6 from "../../assets/home6.jpg";
import home7 from "../../assets/home7.jpg";
import home8 from "../../assets/home8.jpg";
import home9 from "../../assets/home9.jpeg";

export function Carousel() {
  return (
    <Container>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          speed: 1000,
          interval: 5000,
          gap: "1rem",
          autoplay: true,
          pagination: true,
          arrows: false,
          width: "80%",
          heightRatio: 1.2,
        }}
        aria-label="Meus Slides"
      >
        <SplideSlide>
          <SlideImage src={home1} alt="Slide 1" />
        </SplideSlide>
        <SplideSlide>
          <SlideImage src={home2} alt="Slide2" />
        </SplideSlide>
        <SplideSlide>
          <SlideImage src={home3} alt="Slide 3" />
        </SplideSlide>
        <SplideSlide>
          <SlideImage src={home4} alt="Slide 4" />
        </SplideSlide>
        <SplideSlide>
          <SlideImage src={home5} alt="Slide 5" />
        </SplideSlide>
        <SplideSlide>
          <SlideImage src={home6} alt="Slide 6" />
        </SplideSlide>
        <SplideSlide>
          <SlideImage src={home7} alt="Slide 7" />
        </SplideSlide>
        <SplideSlide>
          <SlideImage src={home8} alt="Slide 8" />
        </SplideSlide>
        <SplideSlide>
          <SlideImage src={home9} alt="Slide 9" />
        </SplideSlide>
      </Splide>
    </Container>
  );
}
