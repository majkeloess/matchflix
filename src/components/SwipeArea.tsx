import MoviesControls from "../components/MoviesControls";
import MoviesText from "../components/MoviesText";
import { useMovies } from "../hooks/useMovies";
import { useMoviesContext } from "../hooks/useMoviesContext";
import MoviesImage from "./MoviesImage";

function SwipeArea() {
  useMovies();
  const { current } = useMoviesContext();

  const currentMovie = current;

  return (
    <div data-testid="swipe-area" className="flex flex-col h-[100%]">
      <section className="px-10 flex justify-center">
        {currentMovie && <MoviesImage movie={current} />}
      </section>
      <div>
        <section className="py-5">
          {currentMovie && <MoviesText movie={current} />}
        </section>
        <section className="py-5 xl:py-0">
          <MoviesControls />
        </section>
      </div>
    </div>
  );
}

export default SwipeArea;
