import { data } from "../constants/exampleData";
import ListItem from "./ListItem";
import { Carousel } from "flowbite-react";

function ListList() {
  return (
    <div
      data-testd="list"
      className="border-4 rounded-2xl border-pk md:h-[320px] h-[60dvh] md:mx-10 bg-white/15"
    >
      <Carousel data-testid="list" slide={false} indicators={false}>
        <ListItem data={data[0]} />
        <ListItem data={data[1]} />
      </Carousel>
    </div>
  );
}

export default ListList;
