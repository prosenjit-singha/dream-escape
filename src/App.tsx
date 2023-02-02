import Item from "./components/Item";
import { Main } from "./components/styled";
import useUsersData from "./hooks/useUsersData";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import ItemSkeleton from "./components/Item/ItemSkeleton";

function App() {
  const [pageNo, setPageNo] = useState(1);
  const { data = [], isLoading } = useUsersData();
  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPageNo(page);
  };
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#118d47",
      },
    },
    typography: {
      h1: { fontFamily: "Outfit', sans-serif" },
      fontFamily: "'Poppins', sans-serif;",
    },
  });

  useEffect(() => {
    // for (var i = 0; i < 3; i++) {
    //   setTimeout(function () {
    //     alert(i);
    //   }, 1000 + i);
    // }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* Body */}
      <Main sx={{ mt: [2, 3] }}>
        <CssBaseline />
        <GlobalStyles styles={{ background: "#e0e0e0" }} />
        <ItemSkeleton />
        {isLoading && [1, 2, 3, 4, 5].map((i) => <ItemSkeleton key={i} />)}
        {data.slice(pageNo * 5 - 5, pageNo * 5).map((user) => (
          <Item key={user.id} data={user} />
        ))}

        <Pagination
          count={Math.ceil(data.length / 5)}
          variant="outlined"
          shape="rounded"
          color="primary"
          page={pageNo}
          onChange={handlePageChange}
          sx={{ mx: "auto", mb: [3, 4] }}
        />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

// 0-5, 5-10, 10-15
// 1    2    3
