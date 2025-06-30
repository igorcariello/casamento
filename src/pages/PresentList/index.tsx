import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa6";
import { Header } from "../../components/Header";
import { Message } from "../../components/sections/Message";
import {
  Button,
  Card,
  CardFooter,
  Container,
  Content,
  Description,
  FirstParagraph,
  Photo,
  PresentsWrapper,
  Price,
  ScrollToTopLink,
  SecondParagraph,
  TextWrapper,
  Title,
} from "./styles";
import { priceFormatter } from "../../utils/formatted";
import { api } from "../../lib/axios";

interface Present {
  id: number;
  src: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  is_variable_price: boolean;
}

export function PresentList() {
  const navigate = useNavigate();
  const [presents, setPresents] = useState<Present[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function handleGoCart(id: number) {
    try {
      await api.post("/reservations", { product_id: id });

      navigate(`/presentlist/cart/${id}`);
    } catch (error) {
      console.error("Error ao reservar presente:", error);
      alert("Não foi possível reservar o presente. Tente novamente.");
    }
  }

  useEffect(() => {
    async function fetchPresents() {
      try {
        const response = await api.get<Present[]>("/products");
        setPresents(response.data);
      } catch (err) {
        console.error(err);
        setError("Não foi possível carregar os produtos.");
      } finally {
        setLoading(false);
      }
    }
    fetchPresents();
  }, []);

  if (loading) {
    return (
      <Container>
        <Content>
          <p>Carregando produtos...</p>
        </Content>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Content>
          <p>{error}</p>
        </Content>
      </Container>
    );
  }

  return (
    <Container id="background-header">
      <Content>
        <Header />
        <TextWrapper>
          <h1>Lista de presentes</h1>
          <FirstParagraph>
            <p>
              Nada de panelas ou jogos de cama por aqui! Para deixar tudo mais
              leve e divertido, criamos uma lista de presentes simbólica.
            </p>
            <p>
              É só escolher o que combina mais com a nossa história - ou com as
              suas boas intenções!
            </p>
          </FirstParagraph>
          <SecondParagraph>
            <p>Afinal, não seria super maneiro presentear um casal com uma</p>
            <p>
              viagem para a lua ou um passe vitalício para um bloco de carnaval?
            </p>
            <p>Escolha seu presente de coração aberto!</p>
          </SecondParagraph>
        </TextWrapper>
        <PresentsWrapper>
          {presents.map((present) => (
            <Card key={present.id}>
              <Photo src={present.src} alt={present.title} />
              <Title>{present.title}</Title>
              <Description>{present.description}</Description>
              <CardFooter>
                <Price>
                  {present.is_variable_price
                    ? "Valor livre"
                    : priceFormatter.format(present.price / 100)}
                </Price>
                <Button
                  onClick={() => handleGoCart(present.id)}
                  type="button"
                  disabled={present.stock === 0}
                >
                  {present.stock === 0 ? "Esgotado" : "Comprar"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </PresentsWrapper>
        <ScrollToTopLink href="#background-header">
          <FaChevronUp size={20} />
          Voltar ao topo
        </ScrollToTopLink>
      </Content>
      <Message />
    </Container>
  );
}
