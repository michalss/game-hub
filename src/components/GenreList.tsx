import useGenres from "../hooks/useGenres";

export const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((dat) => (
        <li key={dat.id}>{dat.name}</li>
      ))}
    </ul>
  );
};
