import * as z from "zod";
import {
  BackToHome,
  Button,
  Container,
  Form,
  InputWrapper,
  TextAreaWrapper,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

import { Modal } from "../../components/Modal";

const messageSchema = z.object({
  name: z.string(),
  message: z.string(),
});

type MessageFormInputs = z.infer<typeof messageSchema>;

export function Messages() {
  const { register, handleSubmit, reset } = useForm<MessageFormInputs>({
    resolver: zodResolver(messageSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  function handleGoHome() {
    navigate("/");
  }

  async function handleSendMessage(data: MessageFormInputs) {
    setIsSubmitting(true);

    try {
      await api.post("messages", {
        sender: data.name,
        content: data.message,
      });

      setModalMessage("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      setModalMessage("Falha ao enviar mensagem. Tente novamente.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCloseModal() {
    setModalMessage(null);
    handleGoHome();
  }

  return (
    <>
      <Container>
        <div>
          <BackToHome to="/">
            <FaAngleLeft />
            voltar para Home
          </BackToHome>
        </div>

        <Form onSubmit={handleSubmit(handleSendMessage)}>
          <InputWrapper>
            <label htmlFor="sender">Seu nome:</label>
            <input
              type="text"
              id="sender"
              placeholder="Digite o seu nome"
              required
              {...register("name")}
            />
          </InputWrapper>
          <TextAreaWrapper>
            <label htmlFor="content">Mensagem:</label>
            <textarea
              id="content"
              placeholder="Escreva aqui a sua mensagem para os noivos."
              {...register("message")}
            />
          </TextAreaWrapper>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </Button>
        </Form>
      </Container>
      {modalMessage && (
        <Modal message={modalMessage} onClose={handleCloseModal} />
      )}
    </>
  );
}
