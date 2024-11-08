import { useDispatch, useSelector } from "react-redux";
import PlaySvg from "../assets/svg/PlaySvg";
import { shuffleMovies } from "../utils/random";
import { updateRecommendation } from "../utils/update";
import { MoviesState } from "../constants/types";
import { setCurrent, setIdBox, setLast, setUserList } from "../redux/actions";

function ControlAccept() {
  const { current, movies, idBox, userList } = useSelector(
    (selector: MoviesState) => ({
      current: selector.current,
      idBox: selector.idBox,
      movies: selector.movies,
      userList: selector.userList,
    })
  );

  const dispatch = useDispatch();

  const handleAcceptRecommendation = async () => {
    if (current) {
      await updateRecommendation(current.movie_id, true);

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

      dispatch(setUserList([...userList, current]));
    }
  };
  return (
    <div
      onClick={handleAcceptRecommendation}
      className="bg-white/20 h-20 w-20 md:h-24 md:w-24 rounded-full flex justify-center items-center pl-2 border-pk border-4"
    >
      <PlaySvg />
    </div>
  );
}

export default ControlAccept;
