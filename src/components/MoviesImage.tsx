import { useState } from "react";
import { MoviesState, MovieType } from "../constants/types";
import { updateRecommendation } from "../utils/update";
import { shuffleMovies } from "../utils/random";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, setIdBox, setLast } from "../redux/actions";
import { motion } from "framer-motion";

function MoviesImage({ movie }: { movie: MovieType }) {
  const [openSummary, setOpenSummary] = useState(false);

  const { current, movies, idBox } = useSelector((selector: MoviesState) => ({
    current: selector.current,
    idBox: selector.idBox,
    movies: selector.movies,
  }));

  const dispatch = useDispatch();

  const handleRejectRecommendation = async () => {
    if (current) {
      await updateRecommendation(current.id, false);

      idBox.add(current.id);

      dispatch(setIdBox(idBox));
      dispatch(setLast(current));

      const shuffledMovies = shuffleMovies(movies);

      dispatch(setCurrent(null));

      for (const el of shuffledMovies) {
        if (!idBox.has(el.id)) {
          dispatch(setCurrent(el));
          break;
        }
      }
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleRejectRecommendation}
      data-testid="movies-image"
      onClick={() => setOpenSummary(true)}
      className="rounded-2xl w-[60dvw] md:w-[40dvw] xl:max-h-[50dvh] max-h-[50dvh] h-[50dvh] xl:max-w-[30dvh] overflow-hidden border-pk border-4"
    >
      {!openSummary ? (
        <img
          draggable="false"
          src={movie.imageURL}
          alt="poster"
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpenSummary(false);
          }}
          className="w-full h-full object-cover flex flex-row items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-600 via-fuchsia-400 to-fuchsia-200"
        >
          <div className="p-4">
            <p className="md:text-md text-sm font-roboto font-regular leading-relaxed text-black mt-2">
              {movie.summary}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default MoviesImage;
