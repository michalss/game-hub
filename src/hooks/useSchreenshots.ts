import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenShots = (gameId: number) => {
  const ApiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots, gameId"],
    queryFn: ApiClient.getALL,
  });
};

export default useScreenShots;
