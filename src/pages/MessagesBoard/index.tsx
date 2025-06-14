import { useEffect, useState } from "react";
import {
  Container,
  MessageCard,
  MessageContent,
  MessageHeader,
  MessagesWrapper,
  Title,
} from "./styles";
import { api } from "../../lib/axios";
import { AdminHeader } from "../../components/AdminHeader";

interface Message {
  id: number;
  sender: string;
  content: string;
}

export function MessagesBoard() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await api.get("messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Erro ao buscar mensagens", error);
      }
    }

    fetchMessages();
  }, []);

  return (
    <Container>
      <AdminHeader />

      <Title>Mural de Mensagens</Title>
      <MessagesWrapper>
        {messages.length === 0 ? (
          <p>Sem mensagens ainda</p>
        ) : (
          messages.map((msg) => (
            <MessageCard key={msg.id}>
              <MessageHeader>{msg.sender}</MessageHeader>
              <MessageContent>{msg.content}</MessageContent>
            </MessageCard>
          ))
        )}
      </MessagesWrapper>
    </Container>
  );
}
