import { TEXT } from "../constants/text";

function Logo() {
  return (
    <div className="flex flex-row items-center gap-1">
      <h1 className="text-6xl font-ubuntu font-medium text-white">
        {TEXT.appName}
      </h1>
    </div>
  );
}

export default Logo;
