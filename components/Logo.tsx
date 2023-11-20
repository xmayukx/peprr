"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Nabla, Chakra_Petch } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const nabla = Nabla({ subsets: ["latin"] });
const chakra_petch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
});
function Logo() {
  return (
    <Link href={"/"} className=" overflow-hidden">
      <div className=" flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className=" flex items-center justify-center"
        >
          <p className={`text-4xl dark:text-white ${chakra_petch.className}`}>
            PEPRR
          </p>
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
