import { MovieType } from "../constants/types";
import { useState } from "react";
import ModalComponent from "./ModalComponent";

function MoviesImage({ data }: { data: MovieType }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      onClick={() => setOpenModal(true)}
      className="rounded-2xl w-[60dvw] md:w-[40dvw] xl:max-h-[50dvh] xl:max-w-[30dvh] overflow-hidden border-pk border-4"
    >
      <img
        src={data.imageURL}
        alt="poster"
        className="w-full h-full object-cover"
      />
      <ModalComponent
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={data}
      />
    </div>
  );
}

export default MoviesImage;
