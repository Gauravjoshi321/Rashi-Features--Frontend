import styled, { css } from "styled-components"

const StyledButton = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  width: 10rem;

  ${props => props.variation === "primary" && css`
    background-color: var(--color-brand-600);
    color: var(--color-grey-200)
  `}
  
  ${props => props.variation === "secondary" && css`
    
  `}
`

function Button({ variation, children }) {
  return (
    <StyledButton variation={variation}>
      {children}
    </StyledButton>
  )
}

export default Button;