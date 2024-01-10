import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRashiById } from "../../serviceAPI/rashi";

function useRashiById() {
  const { rashiID } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getRashiById(rashiID),
    queryKey: [`RashiByID-${rashiID}`]
  })

  return { isLoading, data };
}

export default useRashiById;