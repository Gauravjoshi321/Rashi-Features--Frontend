import styled, { css } from "styled-components";

const StyledRashiImages = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  padding-right: 30rem;
  position: relative;
`

const Image = styled.img`
  max-width: 28rem;
  aspect-ratio: 4 / 3;
  object-position: center;
  object-fit: cover;
  box-shadow: 5px 5px 5px 4px rgba(0, 0, 0, 0.311);
  border-radius: 0.7rem;
  position: absolute;

  ${props => props.type === "one" && css`
    z-index: 1;
    top: 10rem;
    left: 5rem;

    @media(max-width: 1200px) {
    left: 2rem;
    }
  
    @media(max-width: 780px) {
      top: 17rem;
    }
  `}

  ${props => props.type === "two" && css`
    z-index: 0;
    top: 4rem;
    left: 25rem;

    @media(max-width: 1200px) {
      left: 18rem;
    }
  
    @media(max-width: 780px) {
      left: 12rem;
    }
  `}

  @media(max-width: 1340px) {
    max-width: 22rem;
  }

  @media(max-width: 1200px) {
    max-width: 20rem;
  }
`

function RashiImages({ images }) {

  return (
    <StyledRashiImages>
      <Image src={`/${images[1]}`} type="one" />
      <Image src={`/${images[0]}`} type="two" />
    </StyledRashiImages>
  )
}

export default RashiImages;