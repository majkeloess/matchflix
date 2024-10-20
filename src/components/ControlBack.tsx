import BackSvg from "../assets/svg/BackSvg";
import { useMoviesContext } from "../hooks/useMoviesContext";

function ControlBack() {
  const {
    last,
    setLast,
    setCurrent,
    idBox,
    setIdBox,
    userList,
    setUserList,
    setQueryGenre,
  } = useMoviesContext();

  const handleComeback = () => {
    if (last) {
      const updatedList = userList.filter((movie) => movie.id != last.id);
      setUserList(updatedList);

      idBox.delete(last.id);
      setIdBox(idBox);

      setCurrent(last);
      setLast(null);
      setQueryGenre(last.genre.toLowerCase());
    }
  };

  return (
    <div
      onClick={handleComeback}
      className="bg-white/20 h-16 w-16 md:h-20 md:w-20 rounded-full flex justify-center items-center border-pk border-4"
    >
      <BackSvg />
    </div>
  );
}

export default ControlBack;
