import { Address } from "../../components/sections/Address";
import { BackgroundHeader } from "../../components/sections/BackgroundHeader";
import { Confirmation } from "../../components/sections/Confirmation";
import { Hosting } from "../../components/sections/Hosting";
import { Message } from "../../components/sections/Message";
import { OursHistory } from "../../components/sections/OursHistory";
import { Phrase } from "../../components/sections/Phrase";
import { Present } from "../../components/sections/Present";
import { TipsForGuests } from "../../components/sections/TipsForGuests";
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
