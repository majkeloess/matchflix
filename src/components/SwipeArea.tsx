import MoviesControls from "../components/MoviesControls";
import MoviesText from "../components/MoviesText";
import MoviesImage from "./MoviesImage";

function SwipeArea() {
  return (
    <div data-testid="swipe-area" className="flex flex-col h-[100%]">
      <section className="px-10 flex justify-center">
        <MoviesImage />
      </section>
      <div>
        <section className="py-5">
          <MoviesText />
        </section>
        <section className="py-5 xl:py-0">
          <MoviesControls />
        </section>
      </div>
    </div>
  );
}

export default SwipeArea;
