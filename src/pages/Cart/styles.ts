import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.COLORS.BACKGROUND_2} 0%,
    ${({ theme }) => theme.COLORS.BACKGROUND_4} 100%
  );
  min-height: 100vh;
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 10vw, 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  object-fit: cover;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const QRCodeSection = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  width: 100%;
  margin-top: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const QRCodeInfo = styled.p`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  font-size: 1rem;
  margin-top: 1rem;
  line-height: 1.4;
`;

export const CustomAmountWrapper = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
    font-weight: 500;
  }
.input-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_4};
  border: 1px solid ${({ theme }) => theme.COLORS.GREEN_600 || "#ccc"};
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  margin: 0 auto 1rem auto; /* centraliza horizontalmente no wrapper */
  width: fit-content; /* se quiser largura mínima apenas do conteúdo */
}

.input-container span {
  font-weight: bold;
  margin-right: 0.25rem;
}

.input-container input {
  border: none;
  background: transparent;
  text-align: center; 
  font-size: 1.5rem;
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_PRIMARY};
  width: auto;
  max-width: 150px;
  outline: none;
}

`;
