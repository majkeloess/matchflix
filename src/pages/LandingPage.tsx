import LandingGrid from "../components/LandingGrid";
import LandingText from "../components/LandingText";
import PageWrapper from "../components/PageWrapper";

function LandingPage() {
  return (
    <PageWrapper>
      <section className="px-6 py-5 flex flex-col xl:flex-row ">
        <div className="xl:w-1/2 flex xl:pt-20 flex-col md:pl-16">
          <LandingText />
        </div>
        <div className="xl:w-1/2 flex justify-center">
          <LandingGrid />
        </div>
      </section>
    </PageWrapper>
  );
}

export default LandingPage;
