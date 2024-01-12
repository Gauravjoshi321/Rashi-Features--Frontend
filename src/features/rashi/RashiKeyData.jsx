import styled from "styled-components"
import { endDateCalculator, startDateCalculator } from "../../utils/dateCalculators"

const StyledKeyData = styled.div`
  grid-row: 2 / 3;
  grid-column: 1;
  padding: 1.2rem 3rem;
  height: auto;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: var(--color-grey-500);

  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  align-items: center;

  @media(max-width: 650px) {
    grid-row: 3;
    grid-column: 1;
  }
`

const KeyDataNameTime = styled.div`
  font-size: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(max-width: 1200px) {
    font-size: 1.4rem;
    padding: 1.2rem 1rem 1.2rem 1rem;
  }
`

const TimeCalc = styled.ul`
  display: flex;
  gap: 1.6rem;
`

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.9;
  margin: auto 3rem;
  padding: 2rem;
  color: var(--color-grey-400);
  background-color: #e3dfee;
  border-radius: 0.8rem;

  @media(max-width: 1200px) {
    font-size: 1.1rem;
    margin: 1.5rem;
    padding: 1.5rem;
  }

  @media(max-width: 650px) {
    margin: 0;
    max-width: 55rem;
  }
  `

function RashiKeyData({ data }) {
  return (
    <StyledKeyData>
      <KeyDataNameTime>
        <p>Name Letters: {data.nameLetter.join(", ")}</p>

        <TimeCalc>
          <li>From: {startDateCalculator(data)}</li>
          <li>To: {endDateCalculator(data)}</li>
        </TimeCalc>
      </KeyDataNameTime>

      <Description>{data.description}</Description>
    </StyledKeyData>
  )
}

export default RashiKeyData;