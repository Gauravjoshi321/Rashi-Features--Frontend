import styled from "styled-components";
import RashiImages from "../features/rashi/RashiImages";
import RashiKeyData from "../features/rashi/RashiKeyData";
import RashiHeading from "../features/rashi/RashiHeading";
import RashiPosNeg from "../features/rashi/RashiPosNeg";
import useRashiById from "../features/rashi/useRashiById";
import Spinner from "../ui/Spinner";


const StyledRashi = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: auto auto auto auto;
  gap: 1rem;
  margin: 3rem 6rem;
  padding: 1rem 2rem;
  border: 1rem solid var(--color-grey-100);

  @media(max-width: 1340px) {
    margin: 3rem 3rem;
  }

  @media(max-width: 1200px) {
    margin: 3rem 2rem;
    padding: 1rem 4rem;
  }

  @media(max-width: 650px) {
    padding: 1rem 1rem;
    grid-template-columns: 1fr;
  }

`


function Rashi() {

  const { isLoading, data } = useRashiById();

  if (isLoading) return <Spinner />

  return (
    <StyledRashi>
      <RashiHeading data={data.rashi} />
      <RashiImages images={data.rashi.image} />
      <RashiKeyData data={data.rashi} />
      <RashiPosNeg data={data.rashi} />
    </StyledRashi >
  )
}

export default Rashi;