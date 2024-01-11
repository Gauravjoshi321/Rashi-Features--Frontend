import styled, { css } from "styled-components";

const StyledRashiImages = styled.div`
  position: relative;

  grid-column: 2;
  grid-row: 1 / span 2;
`

const Image = styled.img`
  width: 30rem;
  aspect-ratio: 4 / 3;
  object-position: center;
  object-fit: cover;
  box-shadow: 5px 5px 5px 4px rgba(0, 0, 0, 0.311);
  border-radius: 0.7rem;
  position: absolute;

  ${props => props.type === "one" && css`
    z-index: 1;
    position: absolute;
    top: 10rem;
    left: 5rem;
  `}
  ${props => props.type === "two" && css`
    z-index: 0;
    position: absolute;
    top: 4rem;
    left: 25rem;
  `}
`

function RashiImages({ images }) {

  return (
    <StyledRashiImages>
      <div>
        <Image src={`/${images[1]}`} type="one" />
      </div>
      <div>
        <Image src={`/${images[0]}`} type="two" />
      </div>
    </StyledRashiImages>
  )
}

export default RashiImages;