import styled from "styled-components"

export const Container = styled.div`
  display: none;
  width: 100%;
  margin-top: 3rem;

  @media (width <= 712px) {
    display: flex;
    justify-content: center;

    .splide {
      width: 80%;
      height: auto;
      border-radius: 8px;

      
    }
  }
`

export const SlideImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  aspect-ratio: 4/5;
  display: block;
  inset: 0;
`