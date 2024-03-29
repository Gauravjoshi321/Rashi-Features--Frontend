import styled from "styled-components";

const StyledRashiPosNeg = styled.div`
  grid-row: 3 / -1;
  grid-column: 1 / -1;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 5rem;

  display: flex;
  align-items: start;
  justify-content: space-around;

  @media(max-width: 1340px) {
    margin-top: 0;
  }

  @media(max-width: 650px) {
    flex-direction: column;
    grid-row: 4;
    grid-column: 1;
  }
`

const Positives = styled.div`
  border-top: 0.01px solid var(--color-brand-100);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Negatives = styled.div`
  border-top: 0.01px solid var(--color-brand-100);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-grey-600);
`

const PositiveData = styled.ul`
  
`

const Li = styled.li`
  font-size: 1.2rem;
  line-height: 1.9;
  letter-spacing: 0.2px;
  font-weight: 500;

  @media(max-width: 650rem) {
    line-height: 2;
  }
`

function RashiPosNeg({ data }) {
  return (
    <StyledRashiPosNeg>
      <Positives>
        <Heading>Positives</Heading>
        <PositiveData>
          {
            data.positives.slice(0, 3).map(pos => <Li key={pos}>- {pos}</Li>)
          }
        </PositiveData>
      </Positives>

      <Negatives>
        <Heading>Negatives</Heading>
        <PositiveData>
          {
            data.negatives.slice(0, 3).map(pos => <Li key={pos}>- {pos}</Li>)
          }
        </PositiveData>
      </Negatives>
    </StyledRashiPosNeg>
  )
}

export default RashiPosNeg;