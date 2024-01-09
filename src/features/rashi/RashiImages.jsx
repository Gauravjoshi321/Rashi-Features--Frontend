import styled from "styled-components";

const StyledRashiImages = styled.div`
  
`

const Image1 = styled.img`
  /* display: block; */
  width: 30rem;
  aspect-ratio: 4 / 3;
  object-position: center;
  object-fit: cover;
  margin: 5rem;

  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.31);
`;

const Image2 = styled.img`
  /* display: block; */
  width: 30rem;
  aspect-ratio: 4 / 3;
  object-position: center;
  object-fit: cover;
  margin: 5rem;

  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.31);
`;

function RashiImages({ images }) {


  return (
    <StyledRashiImages>
      <Image1 src={`/${images[0]}`} />
      <Image2 src={`/${images[1]}`} />
    </StyledRashiImages>
  )
}

export default RashiImages;