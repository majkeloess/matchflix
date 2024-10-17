import { data } from "../constants/exampleData";
import ListItem from "./ListItem";

function ListList() {
  return (
    <ul className="flex flex-col gap-10">
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
