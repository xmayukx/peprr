import PricingCard from "@/components/PricingCard";
import React from "react";

function page() {
  return (
    <div className="isolate overflow-hidden">
      <div className=" mx-auto max-w-7xl px-6 pb-96 text-center sm:pt-32 lg:px-8">
        <div className=" mx-auto max-w-4xl">
          <h2 className=" text-base font-semibold leading-7 dark:text-emerald-200/50 text-emerald-800/80 text-black">
            Pricing
          </h2>
          <p className=" mt-2 text-4xl font-bold tracking-tight dark:text-white text-black  sm:text-5xl">
            The right price for you,
            <br className=" hidden sm:inline lg:hidden" />
            whoever you are.
          </p>
        </div>
        <div className=" relative mt-6">
          <p className=" mx-auto max-w-2xl text-lg leading-8 dark:text-white/60 text-black/60">
            Were 99% sure we have a plan to match 100% of your needs
          </p>
          {/* SVG */}
        </div>
      </div>

      <div className=" flow-root pb-24 sm:pb-32">
        <div className=" -mt-[20rem]">
          <PricingCard redirect={true} />
        </div>
      </div>
    </div>
  );
}

export default page;
