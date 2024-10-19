import GenreSelect from "./GenreSelect";
import ControlReject from "./ControlReject";
import ControlBack from "./ControlBack";
import ControlList from "./ControlList";
import ControlAccept from "./ControlAccept";

function MoviesControls() {
  return (
    <div
      data-testid="movies-controls"
      className="flex flex-row justify-center gap-2 md:gap-8  xl:gap-4 items-center"
    >
      <ControlReject />
      <div className="flex flex-col items-center gap-6">
        <GenreSelect />
        <div className="flex flex-row gap-2 xl:gap-0">
          <ControlBack />
          <ControlList />
        </div>
      </div>
      <ControlAccept />
    </div>
  );
}

export default MoviesControls;
