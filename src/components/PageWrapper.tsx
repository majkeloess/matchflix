import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg w-full min-h-screen xl:min-h-[120vh]">
      <nav className="w-full flex justify-center xl:justify-normal xl:px-10 xl:py-5 pt-5">
        <Link to="/">
          <Logo />
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default PageWrapper;
