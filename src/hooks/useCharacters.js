import { useEffect, useState } from "react";
import api from "../services/api";

// Busca os personagens página por página e acumula na lista.
export function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [attempt, setAttempt] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    api
      .get("/character", { params: { page } })
      .then(({ data }) => {
        if (ignore) return;
        setCharacters((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
        setTotalPages(data.info.pages);
        setTotal(data.info.count);
      })
      .catch(() => {
        if (ignore) return;
        setError(
          "Não consegui falar com a API. Confira sua conexão e tente de novo."
        );
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [page, attempt]);

  const loadMore = () => {
    setLoading(true);
    setPage((p) => p + 1);
  };

  const retry = () => {
    setError(null);
    setLoading(true);
    setAttempt((a) => a + 1);
  };

  return {
    characters,
    total,
    loading,
    error,
    hasMore: page < totalPages,
    loadMore,
    retry,
  };
}
