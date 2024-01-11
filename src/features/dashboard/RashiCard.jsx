import styled from "styled-components";
import RashiCardItem from "./RashiCardItem";
import useRashi from "./useRashi";
import Spinner from "../../ui/Spinner";

const StyledRashiCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem 6rem;
`

const Heading = styled.h1`
  display: flex;
  justify-content: center;

  color: var(--color-grey-600);
`

const RashiCardsGrid = styled.div`
  padding: 2rem 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  grid-row-gap: 7rem;
  align-items: center;
  justify-items: center;

  @media(max-width: 1415px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem 4.5rem;
  }

  @media(max-width: 1170px) {
    grid-template-columns: 1fr 1fr;
    padding: 2rem 7rem;
  }

  @media(max-width: 790px) {
    grid-template-columns: 1fr;
    }
 
`

////////////////////////////////////////////////////////

function RashiCard() {
  const { allRashis, isLoadingRashis } = useRashi();
  if (isLoadingRashis) return <Spinner />

  return (
    <StyledRashiCard>
      <Heading>Choose Your Zodiac sign.</Heading>

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