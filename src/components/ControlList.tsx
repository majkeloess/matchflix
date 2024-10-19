import ListSvg from "../assets/svg/ListSvg";
import { Link } from "react-router-dom";

function ControlList() {
  return (
    <Link to="/list">
      <div className="xl:hidden bg-white/20 h-16 w-16 md:h-20 md:w-20 rounded-full flex justify-center items-center border-pk border-4">
        <ListSvg />
      </div>
    </Link>
  );
}

export default ControlList;
