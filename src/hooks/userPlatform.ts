import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((f) => f.id === id);
};

export default usePlatform;
