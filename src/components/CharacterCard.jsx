import styled from "styled-components";

const STATUS_LABEL = { Alive: "Vivo", Dead: "Morto", unknown: "Desconhecido" };
const GENDER_LABEL = {
  Male: "masculino",
  Female: "feminino",
  Genderless: "sem gênero",
  unknown: "gênero desconhecido",
};

const Card = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 28px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.navy};
`;

const Photo = styled.div`
  position: relative;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.colors.navySoft};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Chip = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  background: ${({ $status, theme }) =>
    $status === "Alive" ? theme.colors.lime : $status === "Dead" ? theme.colors.navy : theme.colors.blue};
  color: ${({ $status, theme }) =>
    $status === "Alive" ? theme.colors.navy : theme.colors.white};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px 20px 22px;
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 800;
  font-size: 1.35rem;
  line-height: 1.1;
  letter-spacing: -0.01em;
`;

const Sub = styled.p`
  margin-top: 4px;
  font-size: 0.95rem;
  color: rgba(0, 24, 46, 0.7);
`;

const Details = styled.dl`
  display: grid;
  gap: 10px;
  padding-top: 14px;
  border-top: 2px solid ${({ theme }) => theme.colors.blue};
  font-size: 0.92rem;

  dt { color: rgba(0, 24, 46, 0.65); }
  dd { font-weight: 700; }
`;

function CharacterCard({ name, image, status, species, gender, origin, location, episodes }) {
  return (
    <Card>
      <Photo>
        <img src={image} alt={`Foto de ${name}`} loading="lazy" width="300" height="300" />
        <Chip $status={status}>{STATUS_LABEL[status] ?? status}</Chip>
      </Photo>
      <Body>
        <div>
          <Name>{name}</Name>
          <Sub>{species}, {GENDER_LABEL[gender] ?? gender}</Sub>
        </div>
        <Details>
          <div><dt>Veio de</dt><dd>{origin}</dd></div>
          <div><dt>Visto por último em</dt><dd>{location}</dd></div>
          <div><dt>Aparece em</dt><dd>{episodes} {episodes === 1 ? "episódio" : "episódios"}</dd></div>
        </Details>
      </Body>
    </Card>
  );
}

export default CharacterCard;
