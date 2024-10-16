import Button from "../components/Button";
import LandingGrid from "../components/LandingGrid";
import Logo from "../components/Logo";
import { TEXT } from "../constants/text";

function LandingPage() {
  return (
    <div className="bg w-full min-h-screen xl:overflow-hidden">
      <nav className="w-full flex justify-center xl:justify-normal xl:px-10 xl:py-5 pt-5">
        <Logo />
      </nav>
      <section className="px-6 py-5 flex flex-col xl:flex-row ">
        <div className="xl:w-1/2 flex xl:pt-20 flex-col md:pl-16">
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
        </div>
        <div className="xl:w-1/2 flex justify-center">
          <LandingGrid />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
