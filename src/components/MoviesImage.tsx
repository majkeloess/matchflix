import { useState } from "react";
import { MovieType } from "../constants/types";

function MoviesImage({ movie }: { movie: MovieType }) {
  const [openSummary, setOpenSummary] = useState(false);

  return (
    <div
      data-testid="movies-image"
      onClick={() => setOpenSummary(true)}
      className="rounded-2xl w-[60dvw] md:w-[40dvw] xl:max-h-[50dvh] max-h-[60dvh] h-[60dvh] xl:max-w-[30dvh] overflow-hidden border-pk border-4"
    >
      {!openSummary ? (
        <img
          src={movie.imageURL}
          alt="poster"
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpenSummary(false);
          }}
          className="w-full h-full object-cover flex flex-row items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-600 via-fuchsia-400 to-fuchsia-200"
        >
          <div className="p-4">
            <p className="md:text-md text-sm font-roboto font-regular leading-relaxed text-black mt-2">
              {movie.summary}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviesImage;
