import React from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import {
  handleAuth,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Link from "next/link";
import { LuMessagesSquare } from "react-icons/lu";
type UserProps = KindeUser | null;

async function Header() {
  const { getUser } = getKindeServerSession();
  const user: UserProps = await getUser();
  console.log(user);

  return (
    <header className=" sticky top-0 bg-white dark:bg-black">
      <nav className=" flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-black max-w-7xl mx-auto">
        <Logo />
        <div className=" flex-1 flex items-center justify-end space-x-4">
          {/* language select */}

          {/* session */}
          {user ? (
            <>
              <Link href={"/chat"} prefetch={false}>
                <LuMessagesSquare />
              </Link>
            </>
          ) : (
            <Link href={"/pricing"}>Pricing</Link>
          )}
          {/* darkmode */}
          <DarkModeToggle />
          {/* user-btn */}
          <UserButton user={user} />
        </div>
      </nav>

      {/* upgrade to premium */}
    </header>
  );
}

export default Header;
