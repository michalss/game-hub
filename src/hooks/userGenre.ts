import useGenres from "./useGenres";
import usePlatforms from "./usePlatforms";

const useGenre = (id?: number) => {
  const { data } = useGenres();
  return data?.results.find((f) => f.id === id);
};

export default useGenre;
