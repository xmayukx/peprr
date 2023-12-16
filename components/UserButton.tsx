import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";
import { PiSignOutBold } from "react-icons/pi";

function UserButton({ user }: { user: KindeUser | null }) {
  if (!user)
    return (
      <Button variant={"secondary"}>
        <LoginLink postLoginRedirectURL="/">Sign in</LoginLink>
      </Button>
    );
  // console.log(user.picture);
  const name = user.given_name + " " + user.family_name;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" rounded-full border-2 border-gray-400">
        <UserAvatar name={name} image={user.picture as string} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="">
          <LogoutLink className=" flex items-center gap-x-5">
            Sign Out <PiSignOutBold className=" text-lg" />
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
