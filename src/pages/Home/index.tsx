import { Address } from "../../components/Address";
import { BackgroundHeader } from "../../components/BackgroundHeader";
import { Phrase } from "../../components/Phrase";
import { Container } from "./styles";


export function Home() {
  return (
    <Container>
      <BackgroundHeader />
      <Phrase/>
      <Address />
    </Container>
  )
}