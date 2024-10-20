import CrossSvg from "../assets/svg/CrossSvg";
import { useMoviesContext } from "../hooks/useMoviesContext";
import { shuffleMovies } from "../utils/random";
import { updateRecommendation } from "../utils/update";

function ControlReject() {
  const { current, setCurrent, setLast, movies, idBox, setIdBox } =
    useMoviesContext();
  const handleRejectRecommendation = async () => {
    if (current) {
      await updateRecommendation(current.id, false);

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
