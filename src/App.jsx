import { BrowserRouter, Route, Routes, useNavigation } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./Pages/Dashboard";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  const Navigate = useNavigation;

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <AppLayout />
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />

            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
