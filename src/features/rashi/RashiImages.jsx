import styled from "styled-components";

const StyledRashiImages = styled.div`
  position: relative;

  grid-row: span 3;
`

const Image1 = styled.img`
  width: 30rem;
  aspect-ratio: 4 / 3;
  object-position: center;
  object-fit: cover;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.247);
  z-index: 1;

  position: absolute;
  top: 10rem;
  left: 5rem;
`;

const Image2 = styled.img`
  width: 30rem;
  aspect-ratio: 4 / 3;
  object-position: center;
  object-fit: cover;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.247);
  z-index: 0;

  position: absolute;
  top: 4rem;
  left: 25rem;
`;

function RashiImages({ images }) {

  return (
    <StyledRashiImages>
      <Image1 src={`/${images[1]}`} />
      <Image2 src={`/${images[0]}`} />
    </StyledRashiImages>
  )
}

export default RashiImages;