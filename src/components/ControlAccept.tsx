import PlaySvg from "../assets/svg/PlaySvg";
import { useMoviesContext } from "../hooks/useMoviesContext";
import { shuffleMovies } from "../utils/random";
import { updateRecommendation } from "../utils/update";

function ControlAccept() {
  const {
    idBox,
    setIdBox,
    current,
    setCurrent,
    setLast,
    movies,
    userList,
    setUserList,
  } = useMoviesContext();
  const handleAcceptRecommendation = async () => {
    if (current) {
      await updateRecommendation(current.id, true);

      idBox.add(current.id);
      setIdBox(idBox);

      setLast(current);

      const shuffledMovies = shuffleMovies(movies);

      setCurrent(null);
      for (const el of shuffledMovies) {
        if (!idBox.has(el.id)) {
          setCurrent(el);
          break;
        }
      }

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
