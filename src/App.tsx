import Item from "./components/Item";
import { Main } from "./components/styled";
import useUsersData from "./hooks/useUsersData";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { Pagination } from "@mui/material";
import ItemSkeleton from "./components/Item/ItemSkeleton";
import lightTheme from "./styles/theme/lightTheme";
import darkTheme from "./styles/theme/darkTheme";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  const [pageNo, setPageNo] = useState(1);
  const [searchString, setSearchString] = useState("");
  const { data = [], isLoading } = useUsersData();

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPageNo(page);
  };

  // toggle theme color scheme
  const toggleTheme = () => {
    if (darkMode) setTheme(lightTheme);
    else setTheme(darkTheme);
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar
        darkMode={darkMode}
        theme={theme}
        toggleTheme={toggleTheme}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      {/* Body */}
      <Main sx={{ mt: [2, 3] }}>
        <CssBaseline />
        <GlobalStyles styles={{ background: "#e0e0e0" }} />
        {/* <ItemSkeleton /> */}
        {isLoading && [1, 2, 3, 4, 5].map((i) => <ItemSkeleton key={i} />)}

        {data.slice(pageNo * 5 - 5, pageNo * 5).map((user) => {
          if (
            user.company.name.toLowerCase().includes(searchString.toLowerCase())
          )
            return <Item key={user.id} data={user} />;
          else return null;
        })}

        <Pagination
          count={Math.ceil(
            data.filter((user) =>
              user.company.name
                .toLowerCase()
                .includes(searchString.toLowerCase())
            ).length / 5
          )}
          variant="outlined"
          shape="rounded"
          color="primary"
          page={pageNo}
          onChange={handlePageChange}
          sx={{
            mx: "auto",
            mb: [3, 4],
            display: data.filter((user) =>
              user.company.name
                .toLowerCase()
                .includes(searchString.toLowerCase())
            ).length
              ? "block"
              : "none",
          }}
        />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

// 0-5, 5-10, 10-15
// 1    2    3
