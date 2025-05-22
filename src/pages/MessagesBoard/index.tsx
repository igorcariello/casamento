import { useEffect, useState } from "react";
import {
  Container,
  MessageCard,
  MessageContent,
  MessageHeader,
  MessagesWrapper,
} from "./styles";
import { api } from "../../lib/axios";
import { FaAngleLeft } from "react-icons/fa6";
import { Header } from "./styles";

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
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar mensagens", error);
      }
    }

    fetchMessages();
  }, []);

  return (
    <Container>
      <Header>
        <a href="/">
          <FaAngleLeft />
          voltar para Home
        </a>
        <h1>Mural de Mensagens</h1>
      </Header>
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
