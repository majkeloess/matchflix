import PageWrapper from "../components/PageWrapper";
import { data } from "../constants/exampleData";
import CrossSvg from "../assets/svg/CrossSvg";
import PlaySvg from "../assets/svg/PlaySvg";
import BackSvg from "../assets/svg/BackSvg";

function MoviesPage() {
  return (
    <PageWrapper>
      <div className="px-10">
        <section className="py-5 flex justify-center">
          <div className="rounded-2xl overflow-hidden border-pk border-2">
            <img
              src={data[0].imageURL}
              alt="poster"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section>
          <div className="flex flex-row items-center justify-between">
            <div>
              <h2 className="text-white text-4xl font-poppins font-semibold">
                {data[0].title}
              </h2>
              <p className="text-white text-xl font-roboto font-medium">
                {data[0].genre}
              </p>
            </div>
            <div>
              <p className="text-white text-2xl">{data[0].rating}/10</p>
            </div>
          </div>
          <div className="py-2">
            <p className="text-white text-sm font-roboto">{data[0].summary}</p>
          </div>
        </section>
        <section className="py-5">
          <div className="flex flex-row justify-between items-center px-2">
            <div className="bg-white/30 h-24 w-24 rounded-full flex justify-center items-center">
              <CrossSvg />
            </div>
            <div className="bg-white/30 h-16 w-16 rounded-full flex justify-center items-center">
              <BackSvg />
            </div>
            <div className="bg-white/30 h-24 w-24 rounded-full flex justify-center items-center pl-2">
              <PlaySvg />
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

export default MoviesPage;
