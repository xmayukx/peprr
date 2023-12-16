"use client";
import React from "react";
import { Button } from "./ui/button";
import { LuMessageSquarePlus } from "react-icons/lu";
import { useRouter } from "next/navigation";

function CreateChatButton() {
  const router = useRouter();
  const createChat = async () => {
    router.push("/chat/create");
  };

  return (
    <Button variant={"ghost"}>
      <LuMessageSquarePlus className=" text-xl" />
    </Button>
  );
}

export default CreateChatButton;
