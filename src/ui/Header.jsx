import styled from "styled-components";
import { HiBars3 } from "react-icons/hi2";

const StyledHeader = styled.div`
  background-color: var(--color-brand-500);
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  svg{
    width: 3rem;
    height: 3rem;
    color: white;
  }
  `

const Logo = styled.p`
  font-size: 2rem;
  font-weight: 600;
  box-shadow: 6px 1px 6px var(--color-grey-600);
  `;

const Img = styled.img`
  width: 4rem;
  border-radius: 50%;
  `;

function Header() {
  return (
    <StyledHeader>
      <HiBars3 />
      <Logo>RASHI FEATURES</Logo>
      <Img src="rashi-avatar.avif" />
    </StyledHeader>
  )
}


export default Header;