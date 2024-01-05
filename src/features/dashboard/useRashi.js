import { useQuery } from "@tanstack/react-query";
import { getAllRashi } from "../../serviceAPI/rashi";

function useRashi() {
  const { data: allRashis, error, isLoading: isLoadingRashis } = useQuery({
    queryFn: getAllRashi,
    queryKey: ["allRashis"],
  })

  return { allRashis, error, isLoadingRashis };
}

export default useRashi;