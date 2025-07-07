import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Form, InputWrapper } from "./styles";
import { api } from "../../lib/axios";

import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const signInSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type signInFormInputs = z.infer<typeof signInSchema>;

export function SignUp() {
  const { register, handleSubmit, reset } = useForm<signInFormInputs>({
    resolver: zodResolver(signInSchema),
  });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function goSignIn() {
    navigate("/signin");
  }

  async function handleSendConfirmation(data: signInFormInputs) {
    setIsSubmitting(true);
    const { email, password, name } = data;

    try {
      await api.post("/admin/signup", {
        email,
        password,
        name,
      });

      alert("Confirmação realizada com sucesso!");
      reset();
      goSignIn();
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

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSendConfirmation)}>
        <h1>Crie sua conta</h1>
        <InputWrapper>
          <label htmlFor="name"> Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Digite o seu nome"
            required
            {...register("name")}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="email"> E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Digite o seu e-mail"
            required
            {...register("email")}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password"> Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            required
            {...register("password")}
          />
        </InputWrapper>
        <a href="/signin">Voltar para o login</a>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </Form>
    </Container>
  );
}
