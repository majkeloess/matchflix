import { MovieType } from "../constants/types";

function ListItem({ data }: { data: MovieType }) {
  return (
    <div className="flex xl:flex-row flex-col px-16 py-10 w-full gap-8 justify-center">
      <div className="w-1/3">
        <div className="rounded-2xl overflow-hidden w-40 h-60">
          <img
            src={data.imageURL}
            alt="poster"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-2/3">
        <p className="text-white font-roboto font-medium text-2xl md:text-4xl leading-8">
          <span className="bg-gradient-to-r from-pink-200 via-pink-400 to-pink-500 bg-clip-text text-transparent">
            {data.title}
          </span>
        </p>
        <p className="text-white font-roboto md:text-3xl font-regular">
          {data.genre}
        </p>
      </div>
    </div>
  );
}

export default ListItem;
