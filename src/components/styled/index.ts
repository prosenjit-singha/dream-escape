import { styled } from "@mui/material";

export const Main = styled("main")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1400px;
`;

export const Block = styled("section")`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
`;
