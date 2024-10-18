import { Modal } from "flowbite-react";
import { MovieType } from "../constants/types";

function ModalComponent({
  openModal,
  setOpenModal,
  data,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: MovieType;
}) {
  return (
    <Modal
      position={"center"}
      dismissible
      show={openModal}
      onClose={() => setOpenModal(false)}
    >
      <Modal.Body className="border-4 border-black bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-600 via-fuchsia-400 to-fuchsia-200">
        <div className="space-y-6">
          <p className="text-center font-roboto font-medium text-xl">Summary</p>
          <p className="text-lg font-roboto font-light leading-relaxed text-black">
            {data.summary}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalComponent;
