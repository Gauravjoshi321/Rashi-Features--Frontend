import styled from "styled-components"

const StyledHeading = styled.h1`
  color: var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledSpecialQuality = styled.span`
  font-size: 1.3rem;
  color: var(--color-grey-400);
`

function RashiHeading({ data }) {
  return (
    <StyledHeading>
      <span>{data.name}</span>&nbsp;
      <StyledSpecialQuality>({data.specialQuality})</StyledSpecialQuality>
    </StyledHeading >
  )
}

export default RashiHeading;