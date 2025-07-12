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
  name: z.string().min(1, "Nome é obrigatório"),
  email: z
    .string()
    .email("Formato de e-mail inválido")
    .optional()
    .or(z.literal("")),
  allowed_guests: z.coerce.number().min(0, "Número deve ser positivo"),
  confirmed_guests: z.coerce.number().min(0, "Número deve ser positivo"),
});

type EditGuestFormInputs = z.infer<typeof editGuestSchema>;

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
  } = useForm<EditGuestFormInputs>({
    resolver: zodResolver(editGuestSchema),
  });

  const navigate = useNavigate();
  const [guest, setGuest] = useState<Guest | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGuest() {
      try {
        const { data } = await api.get<Guest>(`/guests/${guestId}`);
        setGuest(data);
        reset({
          id: data.id,
          name: data.name,
          email: data.email ?? "",
          allowed_guests: data.allowed_guests,
          confirmed_guests: data.confirmed_guests ?? 0,
        });
      } catch {
        alert("Erro ao carregar convidado.");
        navigate("/guests");
      } finally {
        setLoading(false);
      }
    }
    fetchGuest();
  }, [guestId, navigate, reset]);

  async function onSubmit(data: EditGuestFormInputs) {
    try {
      await api.put(`/guests/${data.id}`, {
        ...data,
        email: data.email === "" ? null : data.email,
      });
      alert("Convidado atualizado com sucesso!");
      navigate("/guests");
    } catch {
      alert("Erro ao atualizar convidado.");
    }
  }

  if (loading || !guest) {
    return <Loader />;
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Editar Convidado</h1>
        <input type="hidden" {...register("id")} />

        <InputWrapper>
          <label htmlFor="name">Nome</label>
          <input id="name" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="allowed_guests">Acompanhantes permitidos</label>
          <input
            type="number"
            id="allowed_guests"
            {...register("allowed_guests")}
          />
          {errors.allowed_guests && (
            <span>{errors.allowed_guests.message}</span>
          )}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="confirmed_guests">Acompanhantes confirmados</label>
          <input
            type="number"
            id="confirmed_guests"
            {...register("confirmed_guests")}
          />
          {errors.confirmed_guests && (
            <span>{errors.confirmed_guests.message}</span>
          )}
        </InputWrapper>

        <Buttons>
          <ButtonBack type="button" onClick={() => navigate(-1)}>
            Voltar
          </ButtonBack>
          <Button type="submit">Salvar alterações</Button>
        </Buttons>
      </Form>
    </Container>
  );
}
