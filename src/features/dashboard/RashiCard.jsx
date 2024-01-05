import styled from "styled-components";
import Heading from "../../ui/Heading";
import RashiCardItem from "./RashiCardItem";
import useRashi from "./useRashi";
import Spinner from "../../ui/Spinner";

const StyledRashiCard = styled.div`
  padding: 3rem 6rem;
`

const RashiCardsGrid = styled.div`
  padding: 2rem 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  grid-row-gap: 5rem;
  align-items: center;
  justify-items: center;
`

function RashiCard() {
  const { allRashis, isLoadingRashis } = useRashi();
  if (isLoadingRashis) return <Spinner />

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
        {allRashis.rashis.map(rashi => <RashiCardItem
          key={rashi._id}
          rashi={rashi}
        />
        )}
        <RashiCardItem />
      </RashiCardsGrid>
    </StyledRashiCard>
  )
}

export default RashiCard;