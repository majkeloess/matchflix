import StarSvg from "../assets/svg/StarSvg";
import { MovieType } from "../constants/types";

function MoviesText({ data }: { data: MovieType }) {
  return (
    <div data-testid="movies-text" className="px-10">
      <div className="flex flex-row items-center justify-between  xl:justify-center xl:gap-28">
        <div>
          <h2 className="text-white md:text-4xl text-2xl font-poppins font-semibold">
            {data.title}
          </h2>
          <p className="text-white md:text-xl text-lg font-roboto font-medium">
            {data.genre}
          </p>
        </div>
        <div className="flex flex-row items-center gap-1 md:gap-2">
          <StarSvg />
          <p className="text-white text-xl  md:text-3xl font-medium font-roboto">
            {data.rating}/10
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviesText;
