import ListSvg from "../assets/svg/ListSvg";
import { useMoviesContext } from "../hooks/useMoviesContext";

function ControlList() {
  const { setShowList } = useMoviesContext();
  return (
    <div onClick={() => setShowList(true)}>
      <div className="xl:hidden bg-white/20 h-16 w-16 md:h-20 md:w-20 rounded-full flex justify-center items-center border-pk border-4">
        <ListSvg />
      </div>
    </div>
  );
}

export default ControlList;
