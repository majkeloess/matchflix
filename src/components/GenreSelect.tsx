import { genres, TEXT } from "../constants/text";

function GenreSelect() {
  return (
    <select
      data-testid="select"
      className="border-4 border-pk rounded-xl text-pk text-xl md:text-2xl font-roboto font-regular min-w-32 bg-white/20"
    >
      <option value="all">{TEXT.movieAll}</option>
      {genres.map((genre, id) => (
        <option id={id.toString()} value={genre.toLowerCase()}>
          {genre}
        </option>
      ))}
    </select>
  );
}

export default GenreSelect;
