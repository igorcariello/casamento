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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";

const editGuestSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  email: z.string(),
  allowed_guests: z.coerce.number().min(0, "Número deve ser positivo"),
  confirmed_guests: z.coerce.number().min(0, "Número deve ser positivo"),
});

type editGuestFormInputs = z.infer<typeof editGuestSchema>;

interface Guest {
  id: number;
  name: string;
  email: string | null;
  allowed_guests: number;
  confirmed_guests: number | null;
}

export function EditGuest() {
  const { id } = useParams<{ id: string }>();
  const guestId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<editGuestFormInputs>({
    resolver: zodResolver(editGuestSchema),
  });
  const navigate = useNavigate();
  const [guest, setGuest] = useState<Guest>();

  function goGuest() {
    navigate("/guests");
  }

  function handleBack() {
    navigate(-1);
  }

  async function handleEditGuest(data: editGuestFormInputs) {
    try {
      await api.put(`/guests/${data.id}`, data);
      alert("Convidado atualizado com sucesso!");
      reset();
      goGuest();
    } catch (error) {
      console.error("Erro ao atualizar convidado", error);
      alert("Erro ao atualizar convidado.");
    }
  }

  async function fetchGuest(id: number) {
    try {
      console.log("Requisição para:", `guests/${id}`);
      const response = await api.get(`guests/${id}`);
      setGuest(response.data);
    } catch (error) {
      console.log("Erro ao buscar o convidado", error);
    }
  }

  useEffect(() => {
    fetchGuest(guestId);
  }, [guestId]);

  useEffect(() => {
    if (guest) {
      reset({
        id: guest.id,
        name: guest.name,
        email: guest.email ?? "",
        allowed_guests: guest.allowed_guests,
        confirmed_guests: guest.confirmed_guests ?? 0,
      });
    }
  }, [guest, reset]);

  if (!guest) {
    return <Loader />;
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleEditGuest)}>
        <h1>Editar Convidado</h1>
        <input type="hidden" {...register("id")} />
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
          <label htmlFor="email"> Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Digite o email do convidado"
            required
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
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
        <InputWrapper>
          <label htmlFor="confirmed_guests"> Acompanhantes confirmados:</label>
          <input
            type="number"
            id="confirmed_guests"
            placeholder="Quantidade de acompanhantes"
            required
            {...register("confirmed_guests")}
          />
          {errors.confirmed_guests && (
            <span>{errors.confirmed_guests.message}</span>
          )}
        </InputWrapper>
        <Buttons>
          <ButtonBack onClick={handleBack} type="button" title="Voltar">
            Voltar
          </ButtonBack>
          <Button type="submit" title="Salvar alterações">
            Salvar alterações
          </Button>
        </Buttons>
      </Form>
    </Container>
  );
}
