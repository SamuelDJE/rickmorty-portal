import styled from "styled-components";

const OPTIONS = [
  { value: "all", label: "Todos" },
  { value: "Alive", label: "Vivos" },
  { value: "Dead", label: "Mortos" },
  { value: "unknown", label: "Desconhecidos" },
];

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Pill = styled.button`
  min-height: 44px;
  padding: 0 20px;
  border-radius: 999px;
  border: 2px solid
    ${({ $active, theme }) => ($active ? theme.colors.lime : "rgba(255,255,255,0.35)")};
  background: ${({ $active, theme }) => ($active ? theme.colors.lime : "transparent")};
  color: ${({ $active, theme }) => ($active ? theme.colors.navy : theme.colors.white)};
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease-out, background-color 0.15s ease-out,
    border-color 0.15s ease-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lime};
  }
  &:active {
    transform: scale(0.96);
  }
`;

function StatusFilter({ value, onChange }) {
  return (
    <Group role="group" aria-label="Filtrar por status">
      {OPTIONS.map((opt) => (
        <Pill
          key={opt.value}
          type="button"
          $active={value === opt.value}
          aria-pressed={value === opt.value}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </Pill>
      ))}
    </Group>
  );
}

export default StatusFilter;
