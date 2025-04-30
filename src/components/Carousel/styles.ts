import styled from "styled-components";

export const Container = styled.div`
  display: none;
  width: 60%;
  height: 60%;
  overflow: hidden;

  margin-top: 5rem;

  border-radius: 8px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 0.5rem;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination {
    bottom: 0rem;
    width: 100%;
    text-align: center;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
  }

  .autoplay-progress {
    position: absolute;
    right: 0.2rem;
    bottom: 0.2rem;
    z-index: 10;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};

    > span {
      display: none;
    }
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: ${({ theme }) => theme.COLORS.FONT_COLOR_SECUNDARY};
    fill: none;
    stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }

  @media (width <= 712px) {
    display:block
  }


`

