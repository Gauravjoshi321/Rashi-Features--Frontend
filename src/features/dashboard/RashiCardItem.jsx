import styled from "styled-components";

const data = {
  _id: {
    $oid: "64fc229b1f37532e4719942e"
  },
  name: "Gemini",
  image: [
    "gemini-1.jpeg",
    "gemini-2.jpeg"
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
    $date: "2001-05-20T18:30:00.000Z"
  },
  endDate: {
    $date: "2001-06-19T18:30:00.000Z"
  },
  description: "Gemini is the third sign of the zodiac, symbolized by the Twins. People born between May 21 and June 20 fall under this sign. Gemini is an Air sign, and it is ruled by Mercury, the planet of communication, intellect, and versatility.",
  slug: "gemini",
  __v: 0
}

const StyledRashiCardItem = styled.div`
  
`

function RashiCardItem() {
  return (
    <StyledRashiCardItem>
      <img src="gemini-1.jpeg" />

    </StyledRashiCardItem>
  )
}

export default RashiCardItem;