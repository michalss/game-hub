import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient from "../services/api-client";

const useTrailers = (gameId: number) => {
  const ApiClient = new APIClient<Trailer>("/games/" + gameId + "/movies");
  return useQuery({
    queryKey: ["trailers, gameId"],
    queryFn: ApiClient.getALL,
  });
};

export default useTrailers;
