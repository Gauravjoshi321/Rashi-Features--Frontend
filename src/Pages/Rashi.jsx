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
  grid-template-rows: 7rem auto auto;
  margin: 3rem 6rem;

  border: 1rem solid var(--color-grey-100);
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