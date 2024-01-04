import styled from "styled-components";
import Button from "../../ui/Button";
import { format, getMonth, getDate } from "date-fns";

const data = {
  _id: {
    $oid: "64fc229b1f37532e4719942e"
  },
  name: "Gemini",
  image: [
    "gemini-1.jpg",
    "gemini-2.jpg"
  ],
  nameLetter: [
    "K",
    "CHH",
    "GH",
    "Q",
    "C"
  ],
  specialQuality: "Masterful Communicator",
  positives: {
    1: "Gemini is highly adaptable and can easily switch between different situations and social circles. They thrive in diverse environments and can connect with people from all walks of life.",
    2: "Gemini is intellectually curious. They enjoy learning and exploring new ideas, making them great conversationalists and lifelong learners.",
    3: "Gemini individuals are excellent communicators. They express themselves well, and their engaging conversation style makes them popular among friends and colleagues.",
    4: "Gemini's versatility allows them to handle multiple tasks and roles effectively. They have a diverse range of interests and can excel in various areas.",
    5: "Gemini's curiosity drives them to seek out new experiences and knowledge. They have an innate desire to understand the world around them."
  },
  negatives: {
    1: "Gemini's ability to see multiple perspectives can lead to indecision. They may struggle to commit to a single choice, constantly weighing pros and cons.",
    2: "Gemini's love for variety can sometimes make them appear superficial, as they may skim the surface of various topics without delving deep into any one subject.",
    3: "Gemini individuals can get easily bored if not mentally stimulated. This restlessness may lead them to jump from one activity or interest to another, potentially leaving things unfinished.",
    4: "Due to their duality, Geminis can be inconsistent in their behaviors and opinions. What they feel or believe one day may change the next.",
    5: "With many interests, Gemini can sometimes struggle to focus on a single task. This scattered focus might hinder their ability to see projects through to completion."
  },
  startDate: {
    date: "2001-05-20T18:30:00.000Z"
  },
  endDate: {
    date: "2001-06-19T18:30:00.000Z"
  },
  description: "Gemini is the third sign of the zodiac, symbolized by the Twins. People born between May 21 and June 20 fall under this sign. Gemini is an Air sign, and it is ruled by Mercury, the planet of communication, intellect, and versatility.",
  slug: "gemini",
  __v: 0
}

const StyledRashiCardItem = styled.div`
  border: 0.2rem solid var(--color-grey-300);
  border-radius: 0.8rem;
  position: relative;
  width: 30rem;
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
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: block;
  width:30rem;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: center;
`

const Name = styled.h3`
  padding-right: 1rem;
  padding-top: 0.3rem;
  display: flex;
  justify-content: flex-end;
  color: #ea1515;
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
    width: 22rem;
    color: var(--color-grey-400);
    margin-bottom: 1rem;
  `

const LetterSpan = styled.span`
    
  `

const P = styled.p`
  
`

function RashiCardItem() {
  const StartDate = new Date(data.startDate.date);

  const startMonth = getMonth(StartDate) + 1;
  const editedStartMonth = startMonth < 9 ? `0${startMonth}` : startMonth;
  const ansStartMonth = format(editedStartMonth, "MMM");

  const startDay = getDate(StartDate);
  const ansStartDay = startDay < 9 ? `0${startDay}` : startDay;


  const EndDate = new Date(data.endDate.date);

  const endMonth = getMonth(EndDate) + 1;
  const editedEndMonth = endMonth < 9 ? `0${endMonth}` : endMonth;
  const ansEndMonth = format(editedEndMonth, "MMM");

  const endDay = getDate(EndDate);
  const ansEndDay = endDay < 9 ? `0${endDay}` : endDay;


  return (
    <StyledRashiCardItem>

      <Img src={data.image[0]} />
      <Name>{data.name}</Name>

      <Container>
        <SpecialQuality>{data.specialQuality}</SpecialQuality>

        <p>Name letters: <LetterSpan>{data.nameLetter.join(", ")}</LetterSpan></p>
        <P>From: {`${ansStartDay}-${ansStartMonth}`}</P>
        <P>To: {`${ansEndDay}-${ansEndMonth}`}</P>
        <P
          style={{
            fontFamily: "montserrat",
            fontStyle: "italic",
            fontSize: "1.3rem",
            fontWeight: 300,
            marginBottom: "2rem",
            marginTop: "8px"
          }}
        >
          {data.description.split(" ").slice(0, 20).join(" ")}...
        </P>
      </Container>

      <Button variation="primary">Details</Button>

    </StyledRashiCardItem >
  )
}

export default RashiCardItem;