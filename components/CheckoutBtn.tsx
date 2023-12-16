"use client";
import React from "react";
import { Button } from "./ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserProps } from "./Header";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

function CheckoutBtn({ user }: { user: KindeUser | null }) {
  console.log(user);
  const creatCheckoutSession = async () => {
    if (!user) return;
  };
  return (
    <Button
      onClick={() => creatCheckoutSession()}
      className=" mt-5"
      variant={"outline"}
    >
      Sign up
    </Button>
  );
}

export default CheckoutBtn;
