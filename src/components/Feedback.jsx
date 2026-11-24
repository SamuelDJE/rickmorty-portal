import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 0.45; }
  50% { opacity: 0.8; }
`;

const Skeleton = styled.div`
  aspect-ratio: 3 / 4.2;
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.navySoft};
  animation: ${pulse} 1.4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Box = styled.div`
  grid-column: 1 / -1;
  display: grid;
  justify-items: center;
  gap: 14px;
  padding: 40px 24px;
  border-radius: 28px;
  text-align: center;
  background: ${({ theme }) => theme.colors.navySoft};
  border: 2px solid ${({ $error, theme }) => ($error ? theme.colors.lime : "transparent")};

  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.6rem;
  }
`;

const Action = styled.button`
  min-height: 48px;
  padding: 0 28px;
  border: 0;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.lime};
  color: ${({ theme }) => theme.colors.navy};
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease-out;

  &:active { transform: scale(0.96); }
`;

export function LoadingGrid() {
  return (
    <>
      <Box role="status">
        <h2>Carregando dados...</h2>
        <p>Abrindo o portal, só um instante.</p>
      </Box>
      {Array.from({ length: 8 }, (_, i) => (
        <Skeleton key={i} aria-hidden="true" />
      ))}
    </>
  );
}

export function ErrorBox({ message, onRetry }) {
  return (
    <Box $error role="alert">
      <h2>O portal fechou</h2>
      <p>{message}</p>
      <Action type="button" onClick={onRetry}>Tentar de novo</Action>
    </Box>
  );
}

export function EmptyBox({ onClear }) {
  return (
    <Box>
      <h2>Ninguém por aqui</h2>
      <p>Nenhum personagem carregado bate com essa busca. Tente outro nome ou abra mais portais.</p>
      <Action type="button" onClick={onClear}>Limpar filtros</Action>
    </Box>
  );
}
