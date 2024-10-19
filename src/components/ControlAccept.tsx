import PlaySvg from "../assets/svg/PlaySvg";
import { useMoviesContext } from "../hooks/useMoviesContext";
import { getRandom } from "../utils/rand";
import { updateRecommendation } from "../utils/update";

function ControlAccept() {
  const {
    current,
    setCurrent,
    setLast,
    movies,
    numMovies,
    userList,
    setUserList,
  } = useMoviesContext();
  const handleAcceptRecommendation = async () => {
    if (current) {
      await updateRecommendation(current.id, true);
      setLast(current);
      setCurrent(movies[getRandom(numMovies)]);
      setUserList([...userList, current]);
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
