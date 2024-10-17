import React from "react";
import { MovieType } from "../constants/types";

function ListItem({ data }: { data: MovieType }) {
  return (
    <li className="flex flex-row gap-4">
      <div className="rounded-2xl w-[30dvw] min-w-[30dvw] h-auto overflow-hidden border-pk border-2">
        <img
          src={data.imageURL}
          alt="poster"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-white font-roboto font-medium text-3xl leading-8">
          {data.title}
        </p>
        <p className="text-white font-roboto font-medium">{data.genre}</p>
      </div>
    </li>
  );
}

export default ListItem;
