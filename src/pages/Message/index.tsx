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
import { Modal } from "../../components/Modal"; // Importa seu Modal

const messageSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório."),
  message: z.string().min(1, "A mensagem não pode ser vazia."),
});

type MessageFormInputs = z.infer<typeof messageSchema>;

export function Messages() {
  const { register, handleSubmit, reset, formState } =
    useForm<MessageFormInputs>({
      resolver: zodResolver(messageSchema),
    });
  const { errors } = formState;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  function handleGoHome() {
    navigate("/");
  }

  async function handleSendMessage(data: MessageFormInputs) {
    setIsSubmitting(true);
    const { name, message } = data;

    try {
      await api.post("messages", {
        sender: name,
        content: message,
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
    <Container>
      <div>
        <BackToHome to="/">
          <FaAngleLeft />
          voltar para Home
        </BackToHome>
      </div>
      <Form onSubmit={handleSubmit(handleSendMessage)}>
        <InputWrapper>
          <label htmlFor="sender">Nome:</label>
          <input
            type="text"
            id="sender"
            placeholder="Digite o seu nome"
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="error-name"
          />
          {errors.name && (
            <span id="error-name" role="alert" style={{ color: "red" }}>
              {errors.name.message}
            </span>
          )}
        </InputWrapper>
        <TextAreaWrapper>
          <label htmlFor="content">Mensagem:</label>
          <textarea
            id="content"
            placeholder="Escreva aqui a sua mensagem para os noivos."
            {...register("message")}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="error-message"
          />
          {errors.message && (
            <span id="error-message" role="alert" style={{ color: "red" }}>
              {errors.message.message}
            </span>
          )}
        </TextAreaWrapper>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensagem"}
        </Button>
      </Form>

      {modalMessage && (
        <Modal message={modalMessage} onClose={handleCloseModal} />
      )}
    </Container>
  );
}
