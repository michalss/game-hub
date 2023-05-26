import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getALL,
    staleTime: ms("24h"), //24h
    initialData: { next: 0, count: genres.length, results: genres },
  });

export default useGenres;
