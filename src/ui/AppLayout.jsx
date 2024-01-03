import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr 5rem;

  background-color: var(--color-brand-50);
  height: 100vh;
`

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledAppLayout>
  )
}

export default AppLayout;