import React from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";

function Header() {
  return (
    <header className=" sticky top-0 bg-white dark:bg-black">
      <nav className=" flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-black max-w-7xl mx-auto">
        <Logo />
        <div className=" flex-1 flex items-center justify-end space-x-4">
          {/* language select */}

          {/* session */}

          {/* darkmode */}
          <DarkModeToggle />
          {/* user-btn */}
          <UserButton />
        </div>
      </nav>

      {/* upgrade to premium */}
    </header>
  );
}

export default Header;
