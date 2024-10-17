import Button from "../components/Button";
import PageWrapper from "../components/PageWrapper";
import { TEXT } from "../constants/text";

function ErrorPage() {
  return (
    <PageWrapper>
      <div className="w-full pt-40 flex justify-center items-center flex-col gap-10">
        <h1 className="text-white text-4xl md:text-7xl font-poppins font-semibold">
          {TEXT.errorMain}{" "}
          <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-indigo-700 bg-clip-text text-transparent">
            {TEXT.errorCode}
          </span>
        </h1>
        <Button text="Go back to main page!" />
      </div>
    </PageWrapper>
  );
}

export default ErrorPage;
