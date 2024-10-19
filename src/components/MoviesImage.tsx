import { useState } from "react";
import ModalComponent from "./ModalComponent";
import { data } from "../constants/exampleData";

function MoviesImage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      data-testid="movies-image"
      onClick={() => setOpenModal(true)}
      className="rounded-2xl w-[60dvw] md:w-[40dvw] xl:max-h-[50dvh] xl:max-w-[30dvh] overflow-hidden border-pk border-4"
    >
      <img
        src={data[0].imageURL}
        alt="poster"
        className="w-full h-full object-cover"
      />
      <ModalComponent
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={data[0]}
      />
    </div>
  );
}

export default MoviesImage;
