import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { BackToHome, Button, Container, Form, InputWrapper } from "./styles";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

import { AxiosError } from "axios";

const confirmationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  confirmed_guests: z.number(),
});

type ConfirmationFormInputs = z.infer<typeof confirmationSchema>;

export function ConfirmationPage() {
  const { register, handleSubmit, reset } = useForm<ConfirmationFormInputs>({
    resolver: zodResolver(confirmationSchema),
  });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function goHome() {
    navigate("/");
  }

  async function handleSendConfirmation(data: ConfirmationFormInputs) {
    setIsSubmitting(true);
    const { name, confirmed_guests, email } = data;

    try {
      await api.post("confirmation", {
        name,
        email,
        confirmed_guests,
      });

      alert("Confirmação realizada com sucesso!");
      reset();
      goHome();
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;

      console.error(err);

      const message =
        err.response?.data?.message ||
        "Falha ao confirmar presença. Tente novamente";
      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <div>
        <BackToHome href="/">
          <FaAngleLeft />
          voltar para Home
        </BackToHome>
      </div>
      <Form onSubmit={handleSubmit(handleSendConfirmation)}>
        <InputWrapper>
          <label htmlFor="name"> Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Digite o seu nome completo."
            required
            {...register("name")}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="email"> E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Digite o seu e-mail principal."
            required
            {...register("email")}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="confirmed_guests">
            {" "}
            Quantidade de acompanhantes:
          </label>
          <input
            type="number"
            id="confirmed_guests"
            placeholder={
              windowWidth < 560
                ? "Nº de acompanhantes."
                : "Informe a quantidade de acompanhantes."
            }
            required
            {...register("confirmed_guests", { valueAsNumber: true })}
          />
        </InputWrapper>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Confirmando..." : "Confirmar presença"}
        </Button>
      </Form>
    </Container>
  );
}
