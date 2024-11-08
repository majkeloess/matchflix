import { useDispatch, useSelector } from "react-redux";
import CrossSvg from "../assets/svg/CrossSvg";
import { shuffleMovies } from "../utils/random";
import { updateRecommendation } from "../utils/update";
import { MoviesState } from "../constants/types";
import { setCurrent, setIdBox, setLast } from "../redux/actions";

function ControlReject() {
  const { current, movies, idBox } = useSelector((selector: MoviesState) => ({
    current: selector.current,
    idBox: selector.idBox,
    movies: selector.movies,
  }));

  const dispatch = useDispatch();

  const handleRejectRecommendation = async () => {
    if (current) {
      await updateRecommendation(current.movie_id, false);

      idBox.add(current.movie_id);

      dispatch(setIdBox(idBox));
      dispatch(setLast(current));

      const shuffledMovies = shuffleMovies(movies);

      dispatch(setCurrent(null));

      for (const el of shuffledMovies) {
        if (!idBox.has(el.movie_id)) {
          dispatch(setCurrent(el));
          break;
        }
      }
    }
  };

  return (
    <div
      onClick={handleRejectRecommendation}
      className="bg-white/20 h-20 w-20 md:h-24 md:w-24 rounded-full flex justify-center items-center border-pk border-4"
    >
      <CrossSvg />
    </div>
  );
}

export default ControlReject;
