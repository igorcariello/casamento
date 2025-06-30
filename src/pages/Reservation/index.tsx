import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import {
  Container,
  Table,
  Title,
  TotalCard,
  CardList,
  Card,
  Buttons,
  Actions,
  DeleteButton,
  ConfirmButton,
  ActionButtons,
  Status,
} from "./styles";
import { IoCloseOutline } from "react-icons/io5";
import { MdCheck } from "react-icons/md";
import { AdminHeader } from "../../components/AdminHeader";
import { priceFormatter } from "../../utils/formatted";

interface Reservation {
  id: number;
  product_name: string;
  price: number;
  confirmed: boolean;
  reserved_at: string;
}

export function Reservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  function formatDateToBrazil(dateString: string) {
    const date = new Date(dateString);
    const brasilDate = new Date(date.getTime() - 3 * 60 * 60 * 1000);

    return brasilDate.toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour12: false,
    });
  }

  async function fetchReservations() {
    try {
      const res = await api.get<Reservation[]>("reservations");
      setReservations(res.data);
    } catch (err) {
      console.error("Erro ao buscar reservas:", err);
      alert("Erro ao buscar reservas. Tente novamente.");
    }
  }

  async function handleConfirm(id: number) {
    try {
      await api.patch(`reservations/confirm/${id}`);
      fetchReservations();
    } catch (error) {
      console.error("Erro ao confirmar reserva:", error);
      alert("Erro ao confirmar reserva. Tente novamente.");
    }
  }

  async function handleDelete(id: number) {
    if (!window.confirm("Deseja realmente excluir esta reserva?")) return;
    try {
      await api.delete(`reservations/${id}`);
      fetchReservations();
    } catch (error) {
      console.error("Erro ao excluir reserva:", error);
      alert("Erro ao excluir reserva. Tente novamente.");
    }
  }

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <Container>
      <AdminHeader />
      <Title>Lista de Reservas</Title>

      <Buttons>
        <TotalCard>Total de reservas: {reservations.length}</TotalCard>
      </Buttons>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
            <th>Data Reserva</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.product_name}</td>
              <td>{priceFormatter.format(r.price / 100)}</td>
              <td>{formatDateToBrazil(r.reserved_at)}</td>
              <td>
                <Status confirmed={r.confirmed}>
                  {r.confirmed ? "Confirmada" : "Pendente"}
                </Status>
              </td>
              <Actions>
                {!r.confirmed && (
                  <ConfirmButton
                    onClick={() => handleConfirm(r.id)}
                    title="Confirmar"
                  >
                    <MdCheck size={20} />
                  </ConfirmButton>
                )}
                <DeleteButton
                  onClick={() => handleDelete(r.id)}
                  title="Excluir"
                >
                  <IoCloseOutline size={20} />
                </DeleteButton>
              </Actions>
            </tr>
          ))}
        </tbody>
      </Table>

      <CardList>
        {reservations.map((r) => (
          <Card key={r.id}>
            <ActionButtons>
              {!r.confirmed && (
                <ConfirmButton
                  onClick={() => handleConfirm(r.id)}
                  title="Confirmar"
                >
                  <MdCheck size={20} />
                </ConfirmButton>
              )}
              <DeleteButton onClick={() => handleDelete(r.id)} title="Excluir">
                <IoCloseOutline size={20} />
              </DeleteButton>
            </ActionButtons>
            <div>
              <strong>ID:</strong> <span>{r.id}</span>
            </div>
            <div>
              <strong>Produto:</strong> <span>{r.product_name}</span>
            </div>
            <div>
              <strong>Preço:</strong>{" "}
              <span>
                {r.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div>
              <strong>Data Reserva:</strong>{" "}
              <span>{formatDateToBrazil(r.reserved_at)}</span>
            </div>
            <div>
              <strong>Status:</strong>{" "}
              <Status confirmed={r.confirmed}>
                {r.confirmed ? "Confirmada" : "Pendente"}
              </Status>
            </div>
          </Card>
        ))}
      </CardList>
    </Container>
  );
}
