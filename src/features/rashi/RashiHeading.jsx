import styled from "styled-components"

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* height: fit-content; */
  
  @media (max-width: 650px) {
    flex-direction: column;
  }
`

const Heading = styled.h1`
  font-size: 2.6rem;
  color: var(--color-grey-500);
`

const StyledSpecialQuality = styled.span`
  font-size: 1.3rem;
  color: var(--color-grey-400);
`

function RashiHeading({ data }) {
  return (
    <StyledHeading>
      <Heading>{data.name}</Heading>&nbsp;
      <StyledSpecialQuality>({data.specialQuality})</StyledSpecialQuality>
    </StyledHeading >
  )
}

export default RashiHeading;