import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  flex: 1 1 300px;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 56px 0 52px;
  border: 0;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.navy};
  font-size: 1rem;
  transition: box-shadow 0.15s ease-out;

  &::placeholder {
    color: rgba(0, 24, 46, 0.55);
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.lime};
  }
`;

const Icon = styled.svg`
  position: absolute;
  left: 20px;
  top: 50%;
  translate: 0 -50%;
  color: ${({ theme }) => theme.colors.blue};
  pointer-events: none;
`;

const Clear = styled.button`
  position: absolute;
  right: 6px;
  top: 50%;
  translate: 0 -50%;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.navy};
  font-size: 1.4rem;
  cursor: pointer;
  transition: transform 0.15s ease-out, background-color 0.15s ease-out;

  &:hover { background: rgba(1, 63, 246, 0.1); }
  &:active { transform: scale(0.96); }
  &:focus-visible { outline-offset: -3px; outline-color: ${({ theme }) => theme.colors.blue}; }
`;

function SearchBar({ value, onChange }) {
  return (
    <Wrap>
      <Icon width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </Icon>
      <Input
        type="search"
        aria-label="Buscar personagem por nome"
        placeholder="Buscar por nome, ex: Morty"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <Clear type="button" aria-label="Limpar busca" onClick={() => onChange("")}>
          ×
        </Clear>
      )}
    </Wrap>
  );
}

export default SearchBar;
