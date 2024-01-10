import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getRashiById } from "../../serviceAPI/rashi";

function useRashi() {
  // const { rashiID } = useParams();
  // console.log(rashiID);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("rashiID"));

  // const { } = useQuery({
  //   queryFn: getRashiById()
  // })
}

export default useRashi;