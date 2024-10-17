import { MovieType } from "../constants/types";

function ListItem({ data }: { data: MovieType }) {
  return (
    <li
      data-testid="list-item"
      className="flex flex-row gap-4 md:gap-10 bg-white/25 p-4 md:p-10 rounded-xl border-4 border-pk"
    >
      <div className="rounded-2xl lg:w-[20dvw] lg:min-w-[20dvw] xl:w-[15dvw] xl:min-w-[15dvw] w-[30dvw] min-w-[30dvw] max-h-[20dvh] xl:min-h-[45vh]  overflow-hidden ">
        <img
          src={data.imageURL}
          alt="poster"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-white font-roboto font-medium text-2xl md:text-4xl leading-8">
          <span className="bg-gradient-to-r from-pink-200 via-pink-400 to-pink-500 bg-clip-text text-transparent">
            {data.title}
          </span>
        </p>
        <p className="text-white font-roboto md:text-3xl font-regular">
          {data.genre}
        </p>
      </div>
    </li>
  );
}

export default ListItem;
