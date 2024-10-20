import { Spinner } from "flowbite-react";

function Loader() {
  return (
    <div className="text-center">
      <Spinner color="pink" aria-label="Pink spinner" />
    </div>
  );
}

export default Loader;
