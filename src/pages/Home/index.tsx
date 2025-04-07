import { Address } from "../../components/Address";
import { BackgroundHeader } from "../../components/BackgroundHeader";
import { Confirmation } from "../../components/Confirmation";
import { Hosting } from "../../components/Hosting";
import { Message } from "../../components/Message";
import { OurHistory } from "../../components/OurHistory";
import { Phrase } from "../../components/Phrase";
import { Present } from "../../components/Present";
import { TipForGuests } from "../../components/TipForGuests";
import { Container } from "./styles";


export function Home() {
  return (
    <Container>
      <BackgroundHeader />
      <Phrase/>
      <Address />
      <OurHistory />
      <TipForGuests/>
      <Hosting/>
      <Confirmation/>
      <Present/>
      <Message/>
    </Container>
  )
}