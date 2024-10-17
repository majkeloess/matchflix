import React from "react";
import Logo from "./Logo";
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg w-full min-h-screen xl:overflow-hidden">
      <nav className="w-full flex justify-center xl:justify-normal xl:px-10 xl:py-5 pt-5">
        <Logo />
      </nav>
      {children}
    </div>
  );
}

export default PageWrapper;
