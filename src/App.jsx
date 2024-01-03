import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./Pages/Dashboard";
import GlobalStyle from "./style/GlobalStyle";
import Rashi from "./Pages/Rashi";

function App() {

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
            <Route path="rashi" element={<Rashi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
