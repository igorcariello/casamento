import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { Container, Card, DownloadButton } from "./styles";

interface TicketData {
  id: number;
  name: string;
  ticket_image: string;
}

export function TicketPage() {
  const { id } = useParams();
  const [ticket, setTicket] = useState<TicketData | null>(null);

  useEffect(() => {
    async function fetchTicket() {
      try {
        const res = await api.get<TicketData>(`/guests/${id}/ticket`);
        setTicket(res.data);
      } catch (error) {
        console.error("Erro ao buscar ticket", error);
      }
    }

    fetchTicket();
  }, [id]);

  if (!ticket) return <p>Carregando...</p>;

  return (
    <Container>
      <Card>
        <h2>Ticket de Confirmação</h2>
        <p>{ticket.name}</p>
        <img src={ticket.ticket_image} alt={`Ticket de ${ticket.name}`} />
        <a href={ticket.ticket_image} download={`${ticket.name}.png`}>
          <DownloadButton>Baixar Ticket</DownloadButton>
        </a>
      </Card>
    </Container>
  );
}
