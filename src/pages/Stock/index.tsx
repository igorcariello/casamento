import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import {
  Container,
  Table,
  Title,
  TotalCard,
  CardList,
  Card,
  Buttons,
} from "./styles";
import { AdminHeader } from "../../components/AdminHeader";
import { priceFormatter } from "../../utils/formatted";

interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
}

export function Stock() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    try {
      const res = await api.get<Product[]>("products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <AdminHeader />
      <Title>Estoque de Produtos</Title>

      <Buttons>
        <TotalCard>Total de Produtos: {products.length}</TotalCard>
      </Buttons>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{priceFormatter.format(p.price / 100)}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <CardList>
        {products.map((p) => (
          <Card key={p.id}>
            <div>
              <strong>ID:</strong> <span>{p.id}</span>
            </div>
            <div>
              <strong>Nome:</strong> <span>{p.title}</span>
            </div>
            <div>
              <strong>Preço:</strong>{" "}
              <span>
                {p.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div>
              <strong>Estoque:</strong> <span>{p.stock}</span>
            </div>
          </Card>
        ))}
      </CardList>
    </Container>
  );
}
