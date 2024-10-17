import Button from "../components/Button";
import { TEXT } from "../constants/text";

function LandingText() {
  return (
    <>
      <div className="py-5">
        <h2 className="text-white text-4xl md:text-7xl font-poppins font-semibold">
          {TEXT.landingBigPart1}
          <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-indigo-700 bg-clip-text text-transparent">
            {TEXT.landingBigGradient}
          </span>
          {TEXT.landingBigPart2}
        </h2>
      </div>
      <div className="py-5">
        <p className="text-white font-roboto font-normal text-lg md:text-xl">
          {TEXT.landingSmaller}
        </p>
      </div>
      <div className="py-5">
        <Button text={TEXT.landingButton} />
      </div>
    </>
  );
}

export default LandingText;
