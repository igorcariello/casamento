import styled from "styled-components";

export const Container = styled.div`
  display: none;
  width: 100%;
  margin-top: 3rem;


  @media (width <= 712px) {
    display:flex;
    justify-content: center;
  }


`

export const SlideImage = styled.img`
  width :100%;
  object-fit: cover;
  aspect-ratio: 9 / 16;
  border-radius: 8px;
`

