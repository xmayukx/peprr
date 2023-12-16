import { UserProps } from "@/components/Header";
import PricingCard from "@/components/PricingCard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const user: UserProps = await getUser();
  return (
    <div className=" isolate h-full overflow-hidden pb-40">
      <div className=" mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
        <div className=" mx-auto max-w-4xl ">
          <p className=" leading-6 mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Lets handle your Membership {user?.given_name}
          </p>
        </div>
        <div className=" relative">{/* SVG */}</div>
      </div>

      <PricingCard redirect={false} />
    </div>
  );
}

export default page;
