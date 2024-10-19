import CrossSvg from "../assets/svg/CrossSvg";
import PlaySvg from "../assets/svg/PlaySvg";
import BackSvg from "../assets/svg/BackSvg";
import ListSvg from "../assets/svg/ListSvg";
import { Link } from "react-router-dom";
import GenreSelect from "./GenreSelect";

function MoviesControls() {
  return (
    <div
      data-testid="movies-controls"
      className="flex flex-row justify-center gap-2 md:gap-8  xl:gap-4 items-center">
      <div className="bg-white/20 h-20 w-20 md:h-24 md:w-24 rounded-full flex justify-center items-center border-pk border-4">
        <CrossSvg />
      </div>
      <div className="flex flex-col items-center gap-6">
        <GenreSelect />
        <div className="flex flex-row gap-2 xl:gap-0">
          <div className="bg-white/20 h-16 w-16 md:h-20 md:w-20 rounded-full flex justify-center items-center border-pk border-4">
            <BackSvg />
          </div>
          <Link to="/list">
            <div className="xl:hidden bg-white/20 h-16 w-16 md:h-20 md:w-20 rounded-full flex justify-center items-center border-pk border-4">
              <ListSvg />
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-white/20 h-20 w-20 md:h-24 md:w-24 rounded-full flex justify-center items-center pl-2 border-pk border-4">
        <PlaySvg />
      </div>
    </div>
  );
}

export default MoviesControls;
