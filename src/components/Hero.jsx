import styled, { keyframes } from "styled-components";

const spin = keyframes`to { transform: rotate(360deg); }`;

const Panel = styled.header`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 32px;
  align-items: center;
  padding: clamp(28px, 5vw, 64px);
  border-radius: 36px;
  background: ${({ theme }) => theme.colors.blue};
  overflow: hidden;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 800;
  font-size: clamp(2.6rem, 7vw, 5.2rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-wrap: balance;
`;

const Intro = styled.p`
  margin-top: 20px;
  max-width: 44ch;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.88);
`;

const Portal = styled.div`
  position: relative;
  width: min(100%, 340px);
  aspect-ratio: 1;
  justify-self: center;
  border-radius: 50%;
  box-shadow: 0 0 90px rgba(172, 236, 0, 0.45);
`;

const Ring = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    ${({ theme }) => theme.colors.lime},
    ${({ theme }) => theme.colors.white},
    ${({ theme }) => theme.colors.lime},
    ${({ theme }) => theme.colors.navy},
    ${({ theme }) => theme.colors.lime}
  );
  -webkit-mask: radial-gradient(farthest-side, transparent 82%, #000 83%);
  mask: radial-gradient(farthest-side, transparent 82%, #000 83%);
  animation: ${spin} 14s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Inside = styled.div`
  position: absolute;
  inset: 11%;
  border-radius: 50%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.navy};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Hero() {
  return (
    <Panel>
      <div>
        <Title>Quem atravessou o portal?</Title>
        <Intro>
          Montei esta lista pra praticar React, Vite e Axios. Os personagens
          vêm direto da Rick and Morty API e você pode buscar por nome ou
          filtrar por status.
        </Intro>
      </div>
      <Portal>
        <Ring />
        <Inside>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez saindo do portal"
          />
        </Inside>
      </Portal>
    </Panel>
  );
}

export default Hero;
