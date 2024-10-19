import StarSvg from "../assets/svg/StarSvg";
import { data } from "../constants/exampleData";

function MoviesText() {
  return (
    <div data-testid="movies-text" className="px-10">
      <div className="flex flex-row items-center justify-between  xl:justify-center xl:gap-28">
        <div>
          <h2 className="text-white md:text-4xl text-2xl font-poppins font-semibold">
            {data[0].title}
          </h2>
          <p className="text-white md:text-xl text-lg font-roboto font-medium">
            {data[0].genre}
          </p>
        </div>
        <div className="flex flex-row items-center gap-1 md:gap-2">
          <StarSvg />
          <p className="text-white text-xl  md:text-3xl font-medium font-roboto">
            {data[0].rating}/10
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviesText;
