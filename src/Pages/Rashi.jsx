import styled from "styled-components";
import Heading from "../ui/Heading";
import RashiImages from "../features/rashi/RashiImages";

const data = {
  _id: {
    $oid: "6597c5c3ac027a1d226d5fd5"
  },
  name: "Capricorn",
  image: [
    "capricorn-1.jpg",
    "capricorn-2.jpg"
  ],
  nameLetter: [
    "KH",
    "J"
  ],
  specialQuality: "Resilient Determination",
  positives: {
    1: "Capricorn individuals are highly ambitious. They're driven to succeed and often set high goals for themselves.",
    2: "Capricorn has a practical and realistic approach to life. They're excellent at making plans and organizing tasks efficiently.",
    3: "Capricorn possesses a strong sense of discipline and responsibility. They're often reliable and can handle tasks that require commitment.",
    4: "Capricorn is steadfast and determined. They're willing to put in the hard work necessary to achieve their objectives.",
    5: "Capricorn individuals are dependable and trustworthy. They take their commitments seriously and follow through on their promises."
  },
  negatives: {
    1: "Capricorn individuals can be reserved, making it challenging for them to express their emotions openly. This might sometimes create barriers in relationships.",
    2: "Their practical nature can sometimes border on pessimism, especially when they focus on potential challenges or obstacles.",
    3: "Capricorn can be stubborn, especially when they believe their methods or viewpoints are the most effective.",
    4: "Capricorn's strong work ethic can sometimes lead to overworking, neglecting personal time, or finding it challenging to relax.",
    5: "Capricorn tends to be cautious, often preferring to stay in their comfort zone rather than taking big risks."
  },
  startDate: {
    $date: "2001-12-21T18:30:00.000Z"
  },
  endDate: {
    $date: "2001-01-18T18:30:00.000Z"
  },
  description: "Capricorn is the tenth sign of the zodiac, symbolized by the Goat with a fish tail. People born between December 22 and January 19 fall under this sign. Capricorn is an Earth sign, and it is ruled by Saturn, the planet of discipline, responsibility, and structure.",
  slug: "capricorn",
  __v: 0
}

const StyledRashi = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.3fr;
  grid-template-rows: 10rem auto;
`

const RashiData = styled.div`
  grid-row: 2 / -1;
`

function Rashi() {
  return (
    <StyledRashi>
      <Heading
        as="h1"
        color="var(--color-grey-500)"
        style={{
          margin: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // maxHeight: "5rem",
        }}
      >
        {data.name} <span style={{
          fontSize: "1.7rem"
        }}
        >
          &nbsp;({data.specialQuality})
        </span>
      </Heading >

      <RashiImages images={data.image} />

      <RashiData>
        <img src="/taurus-1.jpeg" />
        <img src="/taurus-1.jpeg" />
      </RashiData>
    </StyledRashi>
  )
}

export default Rashi;