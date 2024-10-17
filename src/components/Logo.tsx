import { TEXT } from "../constants/text";
import MatchflixLogoSvg from "./MatchflixLogoSvg";
function Logo() {
  return (
    <div data-testid="logo" className="flex flex-row items-center gap-4">
      <MatchflixLogoSvg />
      <h1 className="text-6xl font-ubuntu font-medium text-white">
        {TEXT.appName}
      </h1>
    </div>
  );
}

export default Logo;
