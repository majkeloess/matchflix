import { useDispatch } from "react-redux";
import ListSvg from "../assets/svg/ListSvg";
import { setShowList } from "../redux/actions";

function ControlList() {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(setShowList(true))}>
      <div className="xl:hidden bg-white/20 h-16 w-16 md:h-20 md:w-20 rounded-full flex justify-center items-center border-pk border-4">
        <ListSvg />
      </div>
    </div>
  );
}

export default ControlList;
