import styled from "styled-components";
import RashiImages from "../features/rashi/RashiImages";
import RashiKeyData from "../features/rashi/RashiKeyData";
import RashiHeading from "../features/rashi/RashiHeading";
import RashiPosNeg from "../features/rashi/RashiPosNeg";

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
  positives: [
    "Capricorn individuals are highly ambitious. They're driven to succeed and often set high goals for themselves.",
    "Capricorn has a practical and realistic approach to life. They're excellent at making plans and organizing tasks efficiently.",
    "Capricorn possesses a strong sense of discipline and responsibility. They're often reliable and can handle tasks that require commitment.",
    "Capricorn is steadfast and determined. They're willing to put in the hard work necessary to achieve their objectives.",
    "Capricorn individuals are dependable and trustworthy. They take their commitments seriously and follow through on their promises."
  ],
  negatives: [
    "Capricorn individuals can be reserved, making it challenging for them to express their emotions openly. This might sometimes create barriers in relationships.",
    "Their practical nature can sometimes border on pessimism, especially when they focus on potential challenges or obstacles.",
    "Capricorn can be stubborn, especially when they believe their methods or viewpoints are the most effective.",
    "Capricorn's strong work ethic can sometimes lead to overworking, neglecting personal time, or finding it challenging to relax.",
    "Capricorn tends to be cautious, often preferring to stay in their comfort zone rather than taking big risks."
  ],
  startDate: "2001-12-21T18:30:00.000Z",
  endDate: "2001-01-18T18:30:00.000Z",
  description: "Capricorn is the tenth sign of the zodiac, symbolized by the Goat with a fish tail. People born between December 22 and January 19 fall under this sign. Capricorn is an Earth sign, and it is ruled by Saturn, the planet of discipline, responsibility, and structure.",
  slug: "capricorn",
  __v: 0
}


const StyledRashi = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 7rem auto auto;
  margin: 3rem 6rem;

  border: 1rem solid var(--color-grey-100);
`


function Rashi() {
  return (
    <StyledRashi>
      <RashiHeading data={data} />
      <RashiImages images={data.image} />
      <RashiKeyData data={data} />

      <RashiPosNeg data={data} />
    </StyledRashi >
  )
}

export default Rashi;