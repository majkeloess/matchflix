import StarSvg from "../assets/svg/StarSvg";
import { MovieType } from "../constants/types";

function MoviesText({ movie }: { movie: MovieType }) {
  return (
    <div
      data-testid="movies-text"
      className="md:px-10 px-4 md:w-[600px] w-[90dvw] h-[80px] md:h-[100px]"
    >
      <div className="flex flex-row justify-between items-start">
        <div className="pr-5">
          <h2 className="text-white text-lg  md:text-2xl font-poppins font-semibold">
            {movie.title}
          </h2>
          <p className="text-white md:text-xl text-md font-roboto font-medium">
            {movie.genre}
          </p>
        </div>
        <div className="flex flex-row items-center gap-1 md:gap-2">
          <StarSvg />
          <p className="text-white text-md  md:text-xl font-medium font-roboto">
            {movie.rating}/10
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviesText;
