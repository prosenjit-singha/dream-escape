import Item from "./components/Item";
import { Block, Main } from "./components/styled";
import useUsersData from "./hooks/useUsersData";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";

function App() {
  const { data = [], isLoading } = useUsersData();

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#118d47",
      },
    },
  });
  return (
    <Main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{ background: "#e0e0e0" }} />
        {data.map((user) => (
          <Item key={user.id} data={user} />
        ))}
      </ThemeProvider>
    </Main>
  );
}

export default App;
