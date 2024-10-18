import MoviesControls from "../components/MoviesControls";
import MoviesText from "../components/MoviesText";
import { data } from "../constants/exampleData";

function SwipeArea() {
  return (
    <div className="flex flex-col h-[100%]">
      <section className="px-10 flex justify-center">
        <div className="rounded-2xl w-[60dvw] md:w-[40dvw] xl:max-h-[50dvh] xl:max-w-[30dvh] overflow-hidden border-pk border-4">
          <img
            src={data[1].imageURL}
            alt="poster"
            className="w-full h-full object-cover"
          />
        </div>
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
