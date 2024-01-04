import styled from "styled-components";
import Heading from "../../ui/Heading";
import RashiCardItem from "./RashiCardItem";

const StyledRashiCard = styled.div`
  padding: 3rem 3rem;
`

const RashiCardsGrid = styled.div`
  padding: 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-items: center;
`

function RashiCard() {
  return (
    <StyledRashiCard>
      <Heading
        as="h1"
        color="var(--color-grey-600)"
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        Choose Your Zodiac sign.
      </Heading>

      <RashiCardsGrid>
        <RashiCardItem />
      </RashiCardsGrid>
    </StyledRashiCard>
  )
}

export default RashiCard;