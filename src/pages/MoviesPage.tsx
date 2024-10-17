import MoviesControls from "../components/MoviesControls";
import MoviesText from "../components/MoviesText";
import PageWrapper from "../components/PageWrapper";
import { data } from "../constants/exampleData";

function MoviesPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col xl:flex-row h-[100%]  justify-center">
        <section className="py-5 md:py-10 px-10 flex justify-center">
          <div className="rounded-2xl w-[60dvw] md:w-[55dvw] xl:max-h-[80dvh] xl:max-w-[50dvh] overflow-hidden border-pk border-4">
            <img
              src={data[1].imageURL}
              alt="poster"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <div>
          <section className="xl:py-10">
            <MoviesText data={data[0]} />
          </section>
          <section className="py-5">
            <MoviesControls />
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}

export default MoviesPage;
