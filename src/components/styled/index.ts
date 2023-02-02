import { styled } from "@mui/material";

export const Main = styled("main")`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  max-width: 1400px;
  margin-inline: auto;
`;

export const Block = styled("section")`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
`;
