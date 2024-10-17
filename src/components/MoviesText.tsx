import StarSvg from "../assets/svg/StarSvg";
import { data } from "../constants/exampleData";

function MoviesText() {
  return (
    <div className="px-10">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h2 className="text-white text-4xl font-poppins font-semibold">
            {data[0].title}
          </h2>
          <p className="text-white text-xl font-roboto font-medium">
            {data[0].genre}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <StarSvg />
          <p className="text-white text-3xl font-medium font-roboto">
            {data[0].rating}/10
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviesText;
