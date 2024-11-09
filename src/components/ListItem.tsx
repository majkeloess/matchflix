import { MovieType } from "../constants/types";

function ListItem({ movie }: { movie: MovieType }) {
  return (
    <div
      data-testid="list-item"
      className="flex md:flex-row flex-col px-16 py-10 w-full gap-8 justify-center"
    >
      <div>
        <div className="rounded-2xl overflow-hidden md:w-40 md:h-60  ">
          <img
            src={movie.imageurl}
            alt="poster"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col xl:gap-4 md:w-2/3">
        <p className="text-white font-roboto font-medium text-2xl md:text-4xl xl:leading-8">
          <span className="bg-gradient-to-r from-pink-200 via-pink-400 to-pink-500 bg-clip-text text-transparent">
            {movie.title}
          </span>
        </p>
        <p className="text-white font-roboto md:text-3xl font-regular">
          {movie.genre}
        </p>
      </div>
    </div>
  );
}

export default ListItem;
