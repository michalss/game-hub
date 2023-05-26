import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import ApiClient, { FetchResponse } from "../services/api-client";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getALL,
    staleTime: ms("24h"),
    initialData: { count: platforms.length, results: platforms, next: 0 },
  });
};

export default usePlatforms;
