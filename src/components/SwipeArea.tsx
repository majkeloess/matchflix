import MoviesControls from "../components/MoviesControls";
import MoviesText from "../components/MoviesText";
import { data } from "../constants/exampleData";
import MoviesImage from "./MoviesImage";

function SwipeArea() {
  return (
    <div className="flex flex-col h-[100%]">
      <section className="px-10 flex justify-center">
        <MoviesImage data={data[0]} />
      </section>
      <div>
        <section className="py-5">
          <MoviesText data={data[0]} />
        </section>
        <section className="py-5 xl:py-0">
          <MoviesControls />
        </section>
      </div>
    </div>
  );
}

export default SwipeArea;
