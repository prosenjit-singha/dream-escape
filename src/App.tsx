import Item from "./components/Item";
import { Block, Main } from "./components/styled";
import useUsersData from "./hooks/useUsersData";

function App() {
  const { data = [], isLoading } = useUsersData();
  console.info(data);
  return (
    <Main>
      {data.map((user) => (
        <Item key={user.id} data={user} />
      ))}
    </Main>
  );
}

export default App;
