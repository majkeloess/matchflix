import { data } from "../constants/exampleData";
import ListItem from "./ListItem";

function ListList() {
  return (
    <ul
      data-testid="list"
      className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-10"
    >
      <ListItem data={data[0]} />
      <ListItem data={data[1]} />
      <ListItem data={data[0]} />
      <ListItem data={data[1]} />
      <ListItem data={data[0]} />
      <ListItem data={data[1]} />
    </ul>
  );
}

export default ListList;
