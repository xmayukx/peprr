import { CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import CheckoutBtn from "./CheckoutBtn";
import { Button } from "./ui/button";
import { UserProps } from "./Header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const plans = [
  {
    name: "Basic",
    id: null,
    price: null,
    href: "#",
    description: "All the basic stuff",
    features: [
      "20 Message chat limit in chats",
      "2 Participant limit in Chat",
      "3 chat rooms limit",
      "Support 2 languages",
      "48-hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "fsgbrgb",
    href: "#",
    price: "$15",
    description: "For small teams or office",
    features: [
      "Unlimited messages",
      "Unlimited participants",
      "Unlimited chat rooms",
      "Support 10 languages",
      "Multimedia support in chats (images, videos, files, etc.)",
      "1-hour, didicated support response time",
      "Early access to new features",
    ],
  },
];

async function PricingCard({ redirect }: { redirect: boolean }) {
  const { getUser } = getKindeServerSession();
  const user: UserProps = await getUser();
  return (
    <div className=" mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className=" flex flex-col justify-between rounded-3xl dark:bg-black/40 bg-white/40 backdrop-blur-xl dark:text-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
        >
          <div>
            <h3
              id={plan.id + plan.name}
              className=" text-base font-semibold leading-7 text-indigo-600"
            >
              {plan.name}
            </h3>
            <div className=" mt-4 flex items-baseline gap-x-2">
              {plan.price ? (
                <>
                  <span className=" text-5xl font-bold tracking-tight dark:text-slate-300 text-black ">
                    {plan.price}
                  </span>
                  <span className=" text-base font-semibold leading-7 dark:text-gray-600 text-gray-500">
                    /month
                  </span>
                </>
              ) : (
                <>
                  <span className=" text-5xl font-bold tracking-tight dark:text-slate-300">
                    Free
                  </span>
                </>
              )}
            </div>
            <p className=" mt-6 text-base leading-7 dark:text-gray-500">
              {plan.description}
            </p>
            <ul
              role="list"
              className=" mt-10 space-y-4 text-sm leading-6 dark:text-slate-400"
            >
              {plan.features.map((feature) => (
                <li key={feature} className=" flex gap-x-3">
                  <CheckIcon
                    className=" h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {redirect ? (
            <Link href={"/register"} className="mx-auto pt-7">
              <Button variant={"outline"}>Get started today</Button>
            </Link>
          ) : (
            plan.id && <CheckoutBtn user={user} />
          )}
        </div>
      ))}
    </div>
  );
}

export default PricingCard;
