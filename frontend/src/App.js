import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/layout";
import Orb from "./components/orb/Orb";
import Navigation from "./components/navigation/Navigation";
import { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Incomes/Income";
import Expenses from "./components/Expenses/Expenses";
import { useGlobalContext } from "./components/context/globalContext";
import { GlobalProvider } from "./components/context/globalContext";
function App() {
  const [active, setActive] = useState(1);
  const global = useGlobalContext();
  console.log(global);
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);
  return (
    <GlobalProvider>
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>{displayData()}</main>
        </MainLayout>
      </AppStyled>
    </GlobalProvider>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-size: cover; /* Ensures the background image covers the entire screen */
  background-repeat: no-repeat; /* Prevents the background image from repeating */
  background-position: center; /* Centers the background image */
  position: relative;
  main {
    flex: 1;
    background-color: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(44.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
