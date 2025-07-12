import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Container, Table, Title, StatusBadge, CardList, Card } from "./styles";
import { AdminHeader } from "../../components/AdminHeader";
import { Loader } from "../../components/Loader";

interface Guest {
  id: number;
  name: string;
  has_arrived: boolean;
  arrived_at: string;
  confirmed_guests: number;
}

export function CheckInList() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  function formatDateToBrazil(dateString: string) {
    const date = new Date(dateString);

    return date.toLocaleString("pt-BR", {
      hour12: false,
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  function formatGuestNameWithCompanions(guest: Guest) {
    if (guest.confirmed_guests && guest.confirmed_guests > 0) {
      return `${guest.name} + ${guest.confirmed_guests} acompanhante${
        guest.confirmed_guests > 1 ? "s" : ""
      }`;
    }
    return guest.name;
  }

  useEffect(() => {
    async function fetchGuests() {
      try {
        const res = await api.get("/checkin/checkedin");
        setGuests(res.data);
      } catch (error) {
        console.error("Erro ao buscar convidados", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGuests();
  }, []);

  return (
    <Container>
      <AdminHeader />
      <Title>Check-ins Realizados</Title>

      {loading ? (
        <Loader />
      ) : guests.length === 0 ? (
        <p>Nenhum convidado fez check-in ainda.</p>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Data/Hora</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => (
                <tr key={guest.id}>
                  <td>{guest.id}</td>
                  <td>{formatGuestNameWithCompanions(guest)}</td>
                  <td>{formatDateToBrazil(guest.arrived_at)}</td>
                  <td>
                    <StatusBadge>✅ Check-in feito</StatusBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <CardList>
            {guests.map((guest) => (
              <Card key={guest.id}>
                <div>
                  <strong>ID:</strong> <span>{guest.id}</span>
                </div>
                <div>
                  <strong>Nome:</strong>{" "}
                  <span>{formatGuestNameWithCompanions(guest)}</span>
                </div>
                <div>
                  <strong>Data/Hora:</strong>{" "}
                  <span>{formatDateToBrazil(guest.arrived_at)}</span>
                </div>
                <StatusBadge>✅ Check-in feito</StatusBadge>
              </Card>
            ))}
          </CardList>
        </>
      )}
    </Container>
  );
}
