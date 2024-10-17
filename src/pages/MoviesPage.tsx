import MoviesControls from "../components/MoviesControls";
import MoviesText from "../components/MoviesText";
import PageWrapper from "../components/PageWrapper";
import { data } from "../constants/exampleData";

function MoviesPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col h-[100%]">
        <section className="py-5 px-10 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden border-pk border-4">
            <img
              src={data[0].imageURL}
              alt="poster"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section>
          <MoviesText />
        </section>
        <section className="py-5">
          <MoviesControls />
        </section>
      </div>
    </PageWrapper>
  );
}

export default MoviesPage;
