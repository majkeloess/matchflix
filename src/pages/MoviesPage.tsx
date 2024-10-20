import PageWrapper from "../components/PageWrapper";
import { TEXT } from "../constants/text";
import SwipeArea from "../components/SwipeArea";
import ListList from "../components/ListList";
import { useMovies } from "../hooks/useMovies";
import ListHeader from "../components/ListHeader";
import { useMoviesContext } from "../hooks/useMoviesContext";

function MoviesPage() {
  useMovies();
  const { showList } = useMoviesContext();

  return (
    <PageWrapper>
      {!showList ? (
        <div className="py-5">
          <div className="flex flex-row justify-center items-center md:h-[80dvh]">
            <div className="xl:w-1/2">
              <SwipeArea />
            </div>
            <div className="hidden xl:block xl:w-1/2 h-[60dvh] px-10">
              <h1 className="text-white font-poppins font-semibold text-3xl pb-5 text-center">
                {TEXT.listMain}
              </h1>
              <ListList />
            </div>
          </div>
        </div>
      ) : (
        <section className="px-10">
          <ListHeader />
          <div className="py-5">
            <ListList />
          </div>
        </section>
      )}
    </PageWrapper>
  );
}

export default MoviesPage;
