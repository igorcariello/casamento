import { useEffect, useState } from "react";
import {
  Container,
  MessageCard,
  MessageContent,
  MessageHeader,
  MessagesWrapper,
  Title,
  EmptyMessage,
  BackToHome,
} from "./styles";
import { api } from "../../lib/axios";
import { Loader } from "../../components/Loader";
import { Message } from "../../components/sections/Message";
import { FaAngleLeft } from "react-icons/fa6";

interface Message {
  id: number;
  sender: string;
  content: string;
}

export function MessagesBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await api.get("messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Erro ao buscar mensagens", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, []);

  return (
    <Container>
      <Title>Mural de Mensagens</Title>

      <BackToHome to="/">
        <FaAngleLeft />
        Voltar para Home
      </BackToHome>

      {loading ? (
        <Loader />
      ) : messages.length === 0 ? (
        <EmptyMessage>Sem mensagens ainda</EmptyMessage>
      ) : (
        <MessagesWrapper>
          {messages.map((msg) => (
            <MessageCard key={msg.id}>
              <MessageHeader>{msg.sender}</MessageHeader>
              <MessageContent>{msg.content}</MessageContent>
            </MessageCard>
          ))}
        </MessagesWrapper>
      )}

      <Message disnone="disnone" />
    </Container>
  );
}
