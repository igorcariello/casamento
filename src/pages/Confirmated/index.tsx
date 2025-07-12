import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import {
  Container,
  Table,
  UnconfirmButton,
  QRCodeButton,
  Actions,
  Title,
  TotalCard,
  CardList,
  Card,
  ButtonPDF,
  Buttons,
} from "./styles";
import { IoCloseOutline } from "react-icons/io5";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { AdminHeader } from "../../components/AdminHeader";

interface Confirmated {
  id: number;
  name: string;
  email: string;
  allowed_guests: number;
  confirmed_guests: number;
}

export function Confirmated() {
  const [confirmatedList, setConfirmatedList] = useState<Confirmated[]>([]);
  const [totalPeople, setTotalPeople] = useState<number>(0);

  async function fetchConfirmated() {
    try {
      const response = await api.get<{
        totalPeople: number;
        guests: Confirmated[];
      }>("confirmation/confirmed");

      const sortedGuests = response.data.guests.sort((a, b) =>
        a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
      );

      setConfirmatedList(sortedGuests);
      setTotalPeople(response.data.totalPeople);
    } catch (error) {
      console.error("Erro ao buscar confirmados", error);
    }
  }

  async function handleUnconfirm(id: number) {
    const confirm = window.confirm(
      "Tem certeza que deseja excluir este convidado?"
    );
    if (!confirm) return;

    try {
      await api.patch(`guests/unconfirm/${id}`);
      alert("Convidado desconfirmado com sucesso!");
      fetchConfirmated();
    } catch (error) {
      console.error("Erro ao desconfirmar convidado", error);
      alert("Erro ao desconfirmar convidado.");
    }
  }

  function generatePDF() {
    const doc = new jsPDF();
    doc.text("Lista de Confirmados", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["ID", "Convidado", "E-mail", "Acompanhantes", "Confirmados"]],
      body: confirmatedList.map((item) => [
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
    doc.save("confirmados.pdf");
  }

  useEffect(() => {
    fetchConfirmated();
  }, []);

  return (
    <Container>
      <AdminHeader />
      <Title>Lista de Confirmados</Title>

      <Buttons>
        <TotalCard>Total de convidados: {totalPeople}</TotalCard>
        <ButtonPDF onClick={generatePDF} type="button">
          Gerar PDF
        </ButtonPDF>
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
          {confirmatedList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.allowed_guests}</td>
              <td>{item.confirmed_guests}</td>
              <td>
                <Actions>
                  <UnconfirmButton
                    onClick={() => handleUnconfirm(item.id)}
                    title="Desconfirmar"
                  >
                    <IoCloseOutline size={20} />
                  </UnconfirmButton>
                  <QRCodeButton to={`/guests/${item.id}/ticket`}>
                    QR Code
                  </QRCodeButton>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <CardList>
        {confirmatedList.map((item) => (
          <Card key={item.id}>
            <Actions>
              <UnconfirmButton
                onClick={() => handleUnconfirm(item.id)}
                title="Desconfirmar"
              >
                <IoCloseOutline size={20} />
              </UnconfirmButton>
              <QRCodeButton to={`/guests/${item.id}/ticket`}>
                QR Code
              </QRCodeButton>
            </Actions>
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
