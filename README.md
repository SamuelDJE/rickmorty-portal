# Portal: personagens de Rick and Morty

Aplicação web que lista personagens da [Rick and Morty API](https://rickandmortyapi.com/), com busca por nome e filtro por status em tempo real. Feita para a atividade de **Listagem de Dados com React, Vite e Axios**.

> Por que essa API? Ela é pública, não pede chave nem login e devolve imagens, o que deixa a lista mais interessante de ver.

## Tecnologias

- React 19 e Vite
- JavaScript (ES6+)
- Axios
- styled-components (estilização)
- ESLint

## Funcionalidades

- Requisição `GET /character` com Axios dentro de um `useEffect` (hook `useCharacters`)
- Dados guardados com `useState`
- Lista renderizada com `.map()` e `key` única (`c.id`)
- Mensagem "Carregando dados..." com esqueletos enquanto a requisição roda
- Tratamento de erro com mensagem amigável e botão "Tentar de novo"
- Instância do Axios com `baseURL` em `src/services/api.js`
- Card separado em componente próprio (`CharacterCard`), recebendo dados por props
- **Bônus:** filtro por nome em tempo real
- **Extras:** filtro por status, botão "Abrir mais portais" (paginação) e tela de lista vazia

## Estrutura de pastas

```
src/
├── components/   # Hero, SearchBar, StatusFilter, CharacterCard, Feedback
├── hooks/        # useCharacters (requisição, loading, erro, paginação)
├── services/     # api.js (instância do Axios)
├── styles/       # theme.js (cores e fontes) e GlobalStyle.js
├── App.jsx
└── main.jsx
```

## Design

| Cor | Hex | Uso |
| --- | --- | --- |
| Verde portal | `#ACEC00` | Destaques, botões e foco |
| Azul marinho | `#00182E` | Fundo |
| Azul elétrico | `#013FF6` | Painel principal e detalhes |
| Branco | `#FFFFFF` | Cards e campo de busca |

Fontes: Bricolage Grotesque (títulos) e DM Sans (texto). O portal animado do topo respeita `prefers-reduced-motion`.

## Como rodar

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git
cd NOME-DO-REPO
npm install
npm run dev
```

Abra `http://localhost:5173`. Não precisa de variáveis de ambiente.

## API utilizada

`GET https://rickandmortyapi.com/api/character?page=1`

## Autor

Seu Nome
