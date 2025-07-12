import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Form, InputWrapper } from "./styles";
import { api } from "../../lib/axios";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const signUpSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type SignUpFormInputs = z.infer<typeof signUpSchema>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpSchema),
  });

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSignUp(data: SignUpFormInputs) {
    setIsSubmitting(true);
    try {
      await api.post("/admin/signup", data);
      alert("Conta criada com sucesso!");
      reset();
      navigate("/signin");
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      console.error(err);
      const message =
        err.response?.data?.message || "Falha ao cadastrar. Tente novamente.";
      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <h1>Crie sua conta</h1>

        <InputWrapper>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </InputWrapper>

        <a href="/signin">Voltar para o login</a>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </Form>
    </Container>
  );
}
