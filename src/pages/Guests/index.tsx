import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import {
  Container,
  Table,
  Title,
  CardList,
  Card,
  Buttons,
  Button,
  EditButton,
  Actions,
  ActionButtons,
  DeleteButton,
} from "./styles";
import { IoCloseOutline } from "react-icons/io5";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useNavigate } from "react-router-dom";
import { LiaEdit } from "react-icons/lia";
import { AdminHeader } from "../../components/AdminHeader";
import { Loader } from "../../components/Loader";

interface Guests {
  id: number;
  name: string;
  email: string | null;
  allowed_guests: number;
  confirmed_guests: number | null;
}

export function Guests() {
  const [guestsList, setGuestsList] = useState<Guests[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function fetchGuests() {
    try {
      setIsLoading(true);
      const response = await api.get<Guests[]>("/guests");
      const sortedGuests = response.data.sort((a, b) => a.id - b.id);
      setGuestsList(sortedGuests);
    } catch (error) {
      console.error("Erro ao buscar confirmados", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteGuest(id: number) {
    const confirmeDelete = window.confirm(
      "Tem certeza que deseja excluir este convidado?"
    );

    if (!confirmeDelete) return;

    try {
      await api.delete(`guests/${id}`);
      alert("Convidado excluído com sucesso");
      fetchGuests();
    } catch (error) {
      console.error("Erro ao excluir convidado", error);
      alert("Erro ao excluir convidado");
    }
  }

  function handleGoCreateGuest() {
    navigate("/guests/create");
  }

  function handleGoEditGuest(guestId: number) {
    navigate(`/edit/${guestId}`);
  }

  function generatePDF() {
    const doc = new jsPDF();

    doc.text("Lista de Convidados", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["ID", "Convidado", "E-mail", "Acompanhantes", "Confirmados"]],
      body: guestsList.map((item) => [
        item.id,
        item.name,
        item.email,
        item.allowed_guests,
        item.confirmed_guests,
      ]),
    });

    const date = new Date().toLocaleDateString("pt-BR");
    const pageHeight =
      doc.internal.pageSize.height || doc.internal.pageSize.getHeight();

    doc.setFontSize(10);
    doc.text(`Gerado em: ${date}`, 14, pageHeight - 10);

    doc.save("convidados.pdf");
  }

  useEffect(() => {
    fetchGuests();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <AdminHeader />
      <Title>Convidados</Title>
      <Buttons>
        <Button onClick={generatePDF} type="button">
          Gerar PDF
        </Button>
        <Button onClick={handleGoCreateGuest} type="button">
          Cadastrar convidado
        </Button>
      </Buttons>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Convidado</th>
            <th>E-mail</th>
            <th>Acompanhantes</th>
            <th>Confirmados</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {guestsList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.allowed_guests}</td>
              <td>{item.confirmed_guests}</td>
              <Actions>
                <EditButton
                  onClick={() => handleGoEditGuest(item.id)}
                  title="Editar"
                  type="button"
                >
                  <LiaEdit size={24} />
                </EditButton>
                <DeleteButton
                  onClick={() => handleDeleteGuest(item.id)}
                  title="Excluir"
                  type="button"
                >
                  <IoCloseOutline size={32} />
                </DeleteButton>
              </Actions>
            </tr>
          ))}
        </tbody>
      </Table>
      <CardList>
        {guestsList.map((item) => (
          <Card key={item.id}>
            <ActionButtons>
              <EditButton
                onClick={() => handleGoEditGuest(item.id)}
                title="Editar"
              >
                <LiaEdit size={24} />
              </EditButton>
              <DeleteButton
                onClick={() => handleDeleteGuest(item.id)}
                title="Excluir"
              >
                <IoCloseOutline size={32} />
              </DeleteButton>
            </ActionButtons>
            <div>
              <strong>ID:</strong> <span>{item.id}</span>
            </div>
            <div>
              <strong>Convidado:</strong> <span>{item.name}</span>
            </div>
            <div>
              <strong>E-mail:</strong> <span>{item.email}</span>
            </div>
            <div>
              <strong>Acompanhantes:</strong> <span>{item.allowed_guests}</span>
            </div>
            <div>
              <strong>Confirmados:</strong> <span>{item.confirmed_guests}</span>
            </div>
          </Card>
        ))}
      </CardList>
    </Container>
  );
}
