import ArrowSvg from "../assets/svg/ArrowSvg";
import { TEXT } from "../constants/text";
import { useMoviesContext } from "../hooks/useMoviesContext";

function ListHeader() {
  const { setShowList } = useMoviesContext();

  return (
    <div className="flex flex-row items-center gap-8">
      <h1 className="text-white font-poppins font-semibold text-3xl lg:text-6xl text-center py-5 md:py-10">
        {TEXT.listMain}
      </h1>
      <div onClick={() => setShowList(false)}>
        <ArrowSvg color="#FFFFFF" />
      </div>
    </div>
  );
}

export default ListHeader;
