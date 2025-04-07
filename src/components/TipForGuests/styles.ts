import styled from "styled-components";
import imageFlor3 from "../../assets/flor3.png";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: mediumseagreen;

  display: grid;
  grid-template-areas: 
    "dresscode image" 
    "transport transport";
  align-items: center;
  justify-items: center;

  padding: 10rem;
  `

export const DressCode = styled.div`
  background-color: aliceblue;
  grid-area: dresscode;
`
export const Image = styled.div`
  background-image: url(${imageFlor3});
  background-size: cover;
  background-position: center;
  width: 15rem;
  height: 15rem;
  background-color: cadetblue;
  grid-area: image;
`
export const Transport = styled.div`
  background-color: dimgrey;
  grid-area: transport;
`