import CrossSvg from "../assets/svg/CrossSvg";
import PlaySvg from "../assets/svg/PlaySvg";
import BackSvg from "../assets/svg/BackSvg";
import ListSvg from "../assets/svg/ListSvg";
import { Link } from "react-router-dom";

function MoviesControls() {
  return (
    <div className="flex flex-row justify-center gap-2 md:gap-28 xl:gap-10 items-center md:py-10">
      <div className="bg-white/20 h-20 w-20 md:h-32 md:w-32 rounded-full flex justify-center items-center border-pk border-4">
        <CrossSvg />
      </div>
      <div className="flex flex-col items-center gap-6">
        <button className="border-4 border-pk rounded-xl text-white text-xl md:text-2xl font-roboto font-regular px-2 py-1 min-w-32 bg-white/20">
          All
        </button>
        <div className="flex flex-row gap-2">
          <div className="bg-white/20 h-16 w-16 md:h-20 md:w-20 rounded-full flex justify-center items-center border-pk border-4">
            <BackSvg />
          </div>
          <Link to="/list">
            <div className="bg-white/20 h-16 w-16 md:h-20 md:w-20 rounded-full flex justify-center items-center border-pk border-4">
              <ListSvg />
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-white/20 h-20 w-20 md:h-32 md:w-32 rounded-full flex justify-center items-center pl-2 border-pk border-4">
        <PlaySvg />
      </div>
    </div>
  );
}

export default MoviesControls;
