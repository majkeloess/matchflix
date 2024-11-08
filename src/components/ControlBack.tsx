import { useDispatch, useSelector } from "react-redux";
import BackSvg from "../assets/svg/BackSvg";
import { MoviesState } from "../constants/types";
import {
  setCurrent,
  setIdBox,
  setLast,
  setQueryGenre,
  setUserList,
} from "../redux/actions";

function ControlBack() {
  const { last, idBox, userList } = useSelector((selector: MoviesState) => ({
    last: selector.last,
    idBox: selector.idBox,
    userList: selector.userList,
  }));

  const dispatch = useDispatch();

  const handleComeback = () => {
    if (last) {
      const updatedList = userList.filter(
        (movie) => movie.movie_id != last.movie_id
      );
      dispatch(setUserList(updatedList));

      idBox.delete(last.movie_id);
      dispatch(setIdBox(idBox));

      dispatch(setCurrent(last));
      dispatch(setLast(null));
      dispatch(setQueryGenre(last.genre.toLowerCase()));
    }
  };

  return (
    <div
      onClick={handleComeback}
      className="bg-white/20 h-16 w-16 md:h-20 md:w-20 rounded-full flex justify-center items-center border-pk border-4"
    >
      <BackSvg />
    </div>
  );
}

export default ControlBack;
