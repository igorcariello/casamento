import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import {
  BackToHomeLink,
  Button,
  Container,
  Form,
  InputWrapper,
  LoadingText,
  SuggestionItem,
  SuggestionsList,
} from "./styles";
import { api } from "../../lib/axios";
import { useEffect, useState, useRef } from "react";
import { AxiosError } from "axios";
import { useDebounce } from "../../hook/useDebounce";

import { Modal } from "../../components/Modal"; // Importe o modal

const confirmationSchema = z.object({
  name: z
    .string({ required_error: "O nome é obrigatório." })
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z
    .string({ required_error: "O e-mail é obrigatório." })
    .email("Formato de e-mail inválido."),
  confirmed_guests: z
    .number({
      required_error: "A quantidade de acompanhantes é obrigatória.",
      invalid_type_error: "A quantidade de acompanhantes deve ser um número.",
    })
    .int("A quantidade de acompanhantes deve ser um número inteiro.")
    .min(0, "A quantidade de acompanhantes não pode ser negativa."),
});

type ConfirmationFormInputs = z.infer<typeof confirmationSchema>;

interface Guest {
  id: number;
  name: string;
}

export function ConfirmationPage() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ConfirmationFormInputs>({
    resolver: zodResolver(confirmationSchema),
  });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false); // flag para saber se foi sucesso

  const nameInput = watch("name");
  const debouncedNameInput = useDebounce(nameInput, 500);
  const [suggestions, setSuggestions] = useState<Guest[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [isSuggestionsPanelOpen, setIsSuggestionsPanelOpen] = useState(false);
  const nameInputWrapperRef = useRef<HTMLDivElement>(null);

  function goHome() {
    navigate("/");
  }

  function handleSelectSuggestion(guest: Guest) {
    setValue("name", guest.name, { shouldValidate: true });
    setSuggestions([]);
    setIsSuggestionsPanelOpen(false);
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

      setModalMessage(
        "Confirmação realizada com sucesso! Você receberá um QR code por e-mail que deverá ser apresentado no dia do evento."
      );
      setIsSuccess(true);
      reset();
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      console.error(err);

      const apiErrorMessage = (err.response?.data as { message?: string })
        ?.message;
      const message =
        apiErrorMessage || "Falha ao confirmar presença. Tente novamente.";

      setModalMessage(message);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCloseModal() {
    setModalMessage(null);
    if (isSuccess) {
      goHome();
    }
  }

  useEffect(() => {
    if (debouncedNameInput && debouncedNameInput.length >= 3) {
      const fetchSuggestions = async () => {
        setIsLoadingSuggestions(true);
        setSuggestions([]);

        try {
          const response = await api.get<Guest[]>("/guests", {
            params: { nameSearch: debouncedNameInput },
          });

          if (Array.isArray(response.data)) {
            const guestsFromServer = response.data;

            const filteredClientSide = guestsFromServer.filter((guest) =>
              guest.name
                .toLowerCase()
                .includes(debouncedNameInput.toLowerCase())
            );

            setSuggestions(filteredClientSide);
          } else {
            console.warn("Resposta da API não é um array:", response.data);
            setSuggestions([]);
          }
        } catch (error) {
          const axiosError = error as AxiosError;
          console.error("Erro detalhado ao buscar sugestões", axiosError);

          if (axiosError.response) {
            console.error(
              "Dados da resposta do erro:",
              axiosError.response.data
            );
            console.error("Status do erro:", axiosError.response.status);
          } else if (axiosError.request) {
            console.error(
              "Nenhuma resposta recebida, erro na requisição:",
              axiosError.request
            );
          } else {
            console.error(
              "Erro ao configurar a requisição:",
              axiosError.message
            );
          }
          setSuggestions([]);
        } finally {
          setIsLoadingSuggestions(false);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [debouncedNameInput]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        nameInputWrapperRef.current &&
        !nameInputWrapperRef.current.contains(event.target as Node)
      ) {
        setIsSuggestionsPanelOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showSuggestionsList = isSuggestionsPanelOpen && nameInput?.length >= 3;

  return (
    <Container>
      <div>
        <BackToHomeLink to="/">
          <FaAngleLeft />
          voltar para Home
        </BackToHomeLink>
      </div>
      <Form onSubmit={handleSubmit(handleSendConfirmation)}>
        <InputWrapper ref={nameInputWrapperRef}>
          <label htmlFor="name"> Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Digite o seu nome completo."
            {...register("name")}
            onFocus={() => setIsSuggestionsPanelOpen(true)}
            autoComplete="off"
          />
          {errors.name && (
            <LoadingText role="alert">{errors.name.message}</LoadingText>
          )}
          {showSuggestionsList && (
            <>
              {isLoadingSuggestions && <LoadingText>Buscando...</LoadingText>}
              {!isLoadingSuggestions &&
                suggestions.length === 0 &&
                debouncedNameInput.length >= 3 && (
                  <LoadingText>Convidado não encontrado</LoadingText>
                )}
              {suggestions.length > 0 && !isLoadingSuggestions && (
                <SuggestionsList>
                  {suggestions.map((guest) => (
                    <SuggestionItem
                      key={guest.id}
                      onMouseDown={() => handleSelectSuggestion(guest)}
                    >
                      {guest.name}
                    </SuggestionItem>
                  ))}
                </SuggestionsList>
              )}
            </>
          )}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="email"> E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Digite o seu e-mail principal."
            {...register("email")}
          />
          {errors.email && (
            <LoadingText role="alert">{errors.email.message}</LoadingText>
          )}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="confirmed_guests">Quantidade de acompanhantes:</label>
          <input
            type="number"
            id="confirmed_guests"
            placeholder={
              windowWidth < 560
                ? "Nº de acompanhantes."
                : "Informe a quantidade de acompanhantes."
            }
            {...register("confirmed_guests", { valueAsNumber: true })}
          />
          {errors.confirmed_guests && (
            <LoadingText role="alert">
              {errors.confirmed_guests.message}
            </LoadingText>
          )}
        </InputWrapper>

        <Button type="submit" disabled={isSubmitting || isLoadingSuggestions}>
          {isSubmitting ? "Confirmando..." : "Confirmar presença"}
        </Button>
      </Form>

      {modalMessage && (
        <Modal message={modalMessage} onClose={handleCloseModal} />
      )}
    </Container>
  );
}
