import { useState } from "react";
import styled from "styled-components";
import { useCharacters } from "./hooks/useCharacters";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import StatusFilter from "./components/StatusFilter";
import CharacterCard from "./components/CharacterCard";
import { LoadingGrid, ErrorBox, EmptyBox } from "./components/Feedback";

const AUTHOR = "Samuel Santos";

const Page = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: clamp(12px, 3vw, 32px);
  display: grid;
  gap: 32px;
`;

const Toolbar = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 24px;
`;

const Count = styled.p`
  flex-basis: 100%;
  color: rgba(255, 255, 255, 0.75);
`;

const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
`;

const More = styled.button`
  justify-self: center;
  min-width: 240px;
  min-height: 56px;
  padding: 0 32px;
  border: 0;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.lime};
  color: ${({ theme }) => theme.colors.navy};
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease-out, opacity 0.15s ease-out;

  &:active:not(:disabled) { transform: scale(0.96); }
  &:disabled { opacity: 0.5; cursor: progress; }
`;

const Footer = styled.footer`
  padding: 8px 0 24px;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;

  a { color: ${({ theme }) => theme.colors.lime}; }
`;

function App() {
  const { characters, total, loading, error, hasMore, loadMore, retry } = useCharacters();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filtered = characters.filter(
    (c) =>
      c.name.toLowerCase().includes(search.trim().toLowerCase()) &&
      (status === "all" || c.status === status)
  );

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
  };

  const firstLoad = loading && characters.length === 0;
  const isEmpty = !loading && !error && characters.length > 0 && filtered.length === 0;

  return (
    <Page>
      <Hero author={AUTHOR} />

      <Toolbar>
        <SearchBar value={search} onChange={setSearch} />
        <StatusFilter value={status} onChange={setStatus} />
        {characters.length > 0 && (
          <Count aria-live="polite">
            Mostrando {filtered.length} de {characters.length} carregados ({total} no total)
          </Count>
        )}
      </Toolbar>

      <Grid>
        {firstLoad && <LoadingGrid />}
        {!firstLoad &&
          filtered.map((c) => (
            <CharacterCard
              key={c.id}
              name={c.name}
              image={c.image}
              status={c.status}
              species={c.species}
              gender={c.gender}
              origin={c.origin.name}
              location={c.location.name}
              episodes={c.episode.length}
            />
          ))}
        {isEmpty && <EmptyBox onClear={clearFilters} />}
        {error && <ErrorBox message={error} onRetry={retry} />}
      </Grid>

      {hasMore && !error && !firstLoad && (
        <More type="button" onClick={loadMore} disabled={loading}>
          {loading ? "Abrindo portal..." : "Abrir mais portais"}
        </More>
      )}

      <Footer>
        Feito por {AUTHOR}. Dados da{" "}
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
          Rick and Morty API
        </a>.
      </Footer>
    </Page>
  );
}

export default App;
