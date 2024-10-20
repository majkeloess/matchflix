import { genres, TEXT } from "../constants/text";
import { useMoviesContext } from "../hooks/useMoviesContext";

function GenreSelect() {
  const { setQueryGenre, queryGenre } = useMoviesContext();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryGenre(event.target.value);
  };

  return (
    <select
      onChange={handleSelectChange}
      data-testid="select"
      className="border-4 border-pk rounded-xl text-pk text-xl md:text-2xl font-roboto font-regular min-w-32 max-w-48 bg-white/20"
      value={queryGenre.toLowerCase()}
    >
      <option id="all" value="all">
        {TEXT.movieAll}
      </option>
      {genres.map((genre, id) => (
        <option key={id} value={genre.toLowerCase()}>
          {genre}
        </option>
      ))}
    </select>
  );
}

export default GenreSelect;
