import StarSvg from "../assets/svg/StarSvg";
import { MovieType } from "../constants/types";

function MoviesText({ data }: { data: MovieType }) {
  return (
    <div className="px-10">
      <div className="flex flex-row items-center justify-between md:justify-around">
        <div>
          <h2 className="text-white text-4xl md:text-5xl font-poppins font-semibold">
            {data.title}
          </h2>
          <p className="text-white text-xl md:text-3xl font-roboto font-medium">
            {data.genre}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <StarSvg />
          <p className="text-white text-3xl md:text-5xl font-medium font-roboto">
            {data.rating}/10
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviesText;
