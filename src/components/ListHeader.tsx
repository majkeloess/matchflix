import { Link } from "react-router-dom";
import ArrowSvg from "../assets/svg/ArrowSvg";
import { TEXT } from "../constants/text";

function ListHeader() {
  return (
    <div className="flex flex-row items-center gap-8">
      <h1 className="text-white font-poppins font-semibold text-3xl lg:text-6xl text-center py-5 md:py-10">
        {TEXT.listMain}
      </h1>
      <Link to="/movies">
        <ArrowSvg color="#FFFFFF" />
      </Link>
    </div>
  );
}

export default ListHeader;
