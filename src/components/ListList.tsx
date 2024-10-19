import { useMoviesContext } from "../hooks/useMoviesContext";
import ListItem from "./ListItem";
import { Carousel } from "flowbite-react";

function ListList() {
  const { userList } = useMoviesContext();
  return (
    <div
      data-testd="list"
      className="border-4 rounded-2xl border-pk md:h-[320px] h-[60dvh] md:mx-10 bg-white/15"
    >
      <Carousel data-testid="list" slide={false} indicators={false}>
        {userList.map((movie) => (
          <ListItem movie={movie} />
        ))}
      </Carousel>
    </div>
  );
}

export default ListList;
