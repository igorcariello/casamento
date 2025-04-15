import { Address } from "../../components/Address";
import { BackgroundHeader } from "../../components/BackgroundHeader";
import { Confirmation } from "../../components/Confirmation";
import { Hosting } from "../../components/Hosting";
import { Message } from "../../components/Message";
import { OursHistory } from "../../components/OursHistory";
import { Phrase } from "../../components/Phrase";
import { Present } from "../../components/Present";
import { TipsForGuests } from "../../components/TipsForGuests";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <BackgroundHeader />
      <Phrase />
      <Address />
      <OursHistory />
      <TipsForGuests />
      <Hosting />
      <Confirmation />
      <Present />
      <Message />
    </Container>
  );
}
