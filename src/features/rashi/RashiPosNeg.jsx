import styled from "styled-components";

const StyledRashiPosNeg = styled.div`
  grid-row: 3 / -1;
  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Positives = styled.div`

`

const Negatives = styled.div`
  
`

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-grey-600);

`

const PositiveData = styled.ul`
  
`

function RashiPosNeg({ data }) {
  return (
    <StyledRashiPosNeg>
      <Positives>
        <Heading>Positives</Heading>
        <PositiveData>

        </PositiveData>
      </Positives>

      <Negatives>
        <Heading>Negatives</Heading>
      </Negatives>
    </StyledRashiPosNeg>
  )
}

export default RashiPosNeg;