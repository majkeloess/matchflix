import Button from "../components/Button";
import LandingGrid from "../components/LandingGrid";
import Logo from "../components/Logo";

function HomePage() {
  return (
    <div className="bg w-full h-screen">
      <nav className="w-full flex justify-center px-10 py-5">
        <Logo />
      </nav>
      <section className="px-6 py-5">
        <div>
          <div className="py-5">
            <h2 className="text-white text-4xl font-poppins font-semibold">
              Not sure what to watch today? Tired of endless scrolling?
            </h2>
          </div>
          <div className="py-5">
            <p className="text-white font-roboto font-normal">
              Matchflix is movie finder which helps you quickly discover your
              next favorite film. Our app works similarly to Tinder, allowing
              you to seamlessly swipe through movies. Don't miss out on the
              latest and greatest films.
            </p>
          </div>
          <div>
            <Button text="Start swiping now!" />
          </div>
        </div>
        <div>
          <LandingGrid />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
