import { data } from "../constants/exampleData";
import ListItem from "./ListItem";
import { Carousel } from "flowbite-react";

function ListList() {
  return (
    <div className="border-4 rounded-2xl border-pk h-[320px] mx-10 bg-white/15">
      <Carousel data-testid="list">
        <ListItem data={data[0]} />
        <ListItem data={data[1]} />
      </Carousel>
    </div>
  );
}

export default ListList;
