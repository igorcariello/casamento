import * as z from "zod";

import {
  Button,
  ButtonBack,
  Buttons,
  Container,
  Form,
  InputWrapper,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

const createGuestSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  allowed_guests: z.coerce.number().min(0, "Número deve ser positivo"),
});

type createGuestFormInputs = z.infer<typeof createGuestSchema>;

export function CreateGuest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createGuestFormInputs>({
    resolver: zodResolver(createGuestSchema),
  });
  const navigate = useNavigate();

  function goGuest() {
    navigate("/guests");
  }

  function handleBack() {
    navigate(-1);
  }

  async function handleCreateGuest(data: createGuestFormInputs) {
    try {
      await api.post("/guests", data);
      alert("Convidado criado com sucesso!");
      reset();
      goGuest();
    } catch (error) {
      console.error("Erro ao criar convidado", error);
      alert("Erro ao criar convidado.");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleCreateGuest)}>
        <h1>Cadastro de Convidados</h1>
        <InputWrapper>
          <label htmlFor="name"> Nome: </label>
          <input
            type="text"
            id="name"
            placeholder="Digite o nome do convidado"
            required
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="allowed_guests"> Acompanhantes:</label>
          <input
            type="number"
            id="allowed_guests"
            placeholder="Quantidade de acompanhantes"
            required
            {...register("allowed_guests")}
          />
          {errors.allowed_guests && (
            <span>{errors.allowed_guests.message}</span>
          )}
        </InputWrapper>
        <Buttons>
          <ButtonBack onClick={handleBack} type="button" title="Voltar">
            Voltar
          </ButtonBack>
          <Button type="submit" title="Criar Convidado">
            Criar convidado
          </Button>
        </Buttons>
      </Form>
    </Container>
  );
}
