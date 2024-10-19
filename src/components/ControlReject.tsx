import CrossSvg from "../assets/svg/CrossSvg";
import { useMoviesContext } from "../hooks/useMoviesContext";
import { getRandom } from "../utils/rand";
import { updateRecommendation } from "../utils/update";

function ControlReject() {
  const { current, setCurrent, setLast, movies, numMovies } =
    useMoviesContext();
  const handleRejectRecommendation = async () => {
    if (current) {
      await updateRecommendation(current.id, false);
      setLast(current);
      setCurrent(movies[getRandom(numMovies)]);
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
