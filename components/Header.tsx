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
import CreateChatButton from "./CreateChatButton";
import { Button } from "./ui/button";
export type UserProps = KindeUser | null;

async function Header() {
  const { getUser } = getKindeServerSession();
  const user: UserProps = await getUser();
  console.log(user);

  return (
    <header className="border rounded-2xl dark:border-slate-800/20 border-white/30 backdrop-blur-xl dark:bg-black/20 bg-gray-400/20 sticky top-5 mt-5 mx-4 z-50 shadow-lg">
      <nav className="flex flex-col sm:flex-row items-center p-4 pl-2 max-w-7xl mx-auto">
        <Logo />
        <div className=" flex-1 flex items-center justify-end space-x-4">
          {/* language select */}

          {/* session */}
          {user ? (
            <div>
              <Link href={"/chat"} prefetch={false}>
                <Button variant={"ghost"}>
                  <LuMessagesSquare className=" text-xl" />
                </Button>
              </Link>
              <CreateChatButton />
            </div>
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
