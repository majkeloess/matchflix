import { useSelector } from "react-redux";
import MoviesControls from "../components/MoviesControls";
import MoviesText from "../components/MoviesText";
import { TEXT } from "../constants/text";
import ControlList from "./ControlList";
import GenreSelect from "./GenreSelect";
import Loader from "./Loader";
import MoviesImage from "./MoviesImage";
import { MoviesState } from "../constants/types";

function SwipeArea() {
  const { movies, current } = useSelector((selector: MoviesState) => ({
    movies: selector.movies,
    current: selector.current,
  }));

  console.log(movies.length);

  return (
    <div data-testid="swipe-area" className="flex flex-col h-[100%] md:mt-20">
      {movies.length != 0 && current && (
        <>
          <section className="px-10 flex justify-center">
            <MoviesImage movie={current} />
          </section>
          <section className="py-5 flex justify-center">
            <MoviesText movie={current} />
          </section>
          <div>
            <section className="py-5 xl:py-0">
              <MoviesControls />
            </section>
          </div>
        </>
      )}
      {movies.length == 0 && <Loader />}
      {!current && (
        <section className="flex flex-col items-center justify-center gap-8">
          <p className="text-center text-white font-roboto font-medium text-xl px-10">
            {TEXT.movieOut}
          </p>
          <div className="xl:block flex flex-row gap-8">
            <GenreSelect />
            <ControlList />
          </div>
        </section>
      )}
    </div>
  );
}

export default SwipeArea;
