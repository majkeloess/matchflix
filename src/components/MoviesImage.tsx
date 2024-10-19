import { useState } from "react";
import ModalComponent from "./ModalComponent";
import { MovieType } from "../constants/types";

function MoviesImage({ movie }: { movie: MovieType }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      data-testid="movies-image"
      onClick={() => setOpenModal(true)}
      className="rounded-2xl w-[60dvw] md:w-[40dvw] xl:max-h-[50dvh] xl:max-w-[30dvh] overflow-hidden border-pk border-4"
    >
      <img
        src={movie.imageURL}
        alt="poster"
        className="w-full h-full object-cover"
      />
      <ModalComponent
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={movie}
      />
    </div>
  );
}

export default MoviesImage;
