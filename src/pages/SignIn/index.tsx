import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Form, InputWrapper } from "./styles";

import { useAuth } from "../../hook/useAuth";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "A senha é obrigatória"),
});

type signInFormInputs = z.infer<typeof signInSchema>;

export function SignIn() {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<signInFormInputs>({
    resolver: zodResolver(signInSchema),
  });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSignIn(data: signInFormInputs) {
    setIsSubmitting(true);

    try {
      await signIn(data);
      reset();
      navigate("/guests");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <h1>Faça seu login</h1>
        <InputWrapper>
          <label htmlFor="email"> E-mail: </label>
          <input
            type="email"
            id="email"
            placeholder="Digite o seu e-mail"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password"> Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </InputWrapper>
        <a href="/signup">Criar Conta</a>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </Form>
    </Container>
  );
}
