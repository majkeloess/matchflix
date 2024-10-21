import { TEXT } from "../constants/text";
import { useMoviesContext } from "../hooks/useMoviesContext";
import ListItem from "./ListItem";
import { Carousel } from "flowbite-react";

function ListList() {
  const { userList } = useMoviesContext();
  return (
    <div
      data-testd="list"
      className="border-4 rounded-2xl border-pk md:h-[320px] h-[80dvh] md:mx-10 bg-white/15"
    >
      {userList.length ? (
        <Carousel data-testid="list" slide={false} indicators={false}>
          {userList.map((movie, i) => (
            <ListItem movie={movie} key={i} />
          ))}
        </Carousel>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-xl font-roboto text-white font-semibold">
            <span className="bg-gradient-to-r from-pink-200 via-pink-400 to-pink-500 bg-clip-text text-transparent">
              {TEXT.listEmpty}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default ListList;
