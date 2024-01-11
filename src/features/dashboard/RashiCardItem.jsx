import styled from "styled-components";
import Button from "../../ui/Button";
import { endDateCalculator, startDateCalculator } from "../../utils/dateCalculators";
import { useNavigate } from "react-router-dom";


const StyledRashiCardItem = styled.div`
  border: 0.2rem solid var(--color-grey-300);
  border-radius: 0.8rem;
  position: relative;
  max-width: 30rem;
  height: 55rem;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;

  button:last-child{
    align-self: flex-end;
    margin-right: 2rem;
    margin-bottom: 2rem;
    border: 0.1rem solid var(--color-grey-200);
    border-radius: 2rem;
  }
`

const Img = styled.img`
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: center;
`

const Name = styled.h3`
  padding-right: 1rem;
  padding-top: 0.3rem;
  display: flex;
  justify-content: flex-end;
  color: #cda206;
  font-family: "cinzel", sans-serif;
  font-size: 2rem;
  background-color: var(--color-grey-100);
`

const Container = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  font-weight: 400;
  color: var(--color-grey-500);
  `

const SpecialQuality = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  max-width: 22rem;
  color: var(--color-grey-400);
  margin-bottom: 1rem;
  `;


function RashiCardItem({ rashi }) {
  const navigate = useNavigate();

  function handleClickDetails(id) {
    navigate(`/rashi/${id}`)
  }

  if (rashi) return (
    <StyledRashiCardItem>

      <div>
        <Img src={rashi.image[0]} />
        <Name>{rashi.name}</Name>

        <Container>
          <SpecialQuality>{rashi.specialQuality}</SpecialQuality>

          <p>Name letters: <span>{rashi.nameLetter.join(", ")}</span></p>
          <p>From: {startDateCalculator(rashi)}</p>
          <p>To: {endDateCalculator(rashi)}</p>
          <p
            style={{
              fontFamily: "montserrat",
              fontStyle: "italic",
              fontSize: "1.3rem",
              fontWeight: 300,
              marginBottom: "2rem",
              marginTop: "8px",
              height: "7rem"
            }}
          >
            {rashi.description.split(" ").slice(0, 16).join(" ")}...
          </p>
        </Container>
      </div>

      <Button
        variation="primary"
        onClick={() => handleClickDetails(rashi._id)}
      >
        Details
      </Button>

    </StyledRashiCardItem >
  )
}

export default RashiCardItem;