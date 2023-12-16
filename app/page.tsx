import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className=" py-12 sm:py-20 lg:pb-40">
        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" mx-auto max-w-2xl text-center ">
            <h1 className=" text-4xl font-bold tracking-tight sm:text-6xl ">
              Chat with your buddies!
            </h1>
            <p className=" mt-6 text-lg leading-8 text-black dark:text-white">
              You can speak your language, they can speak theirs.{" "}
              <span className=" dark:text-indigo-300 text-indigo-600 underline decoration-dashed transition-all dark:hover:decoration-indigo-100 hover:decoration-indigo-900 underline-offset-4">
                Let AI handle translation for you.
              </span>
            </p>
            <div className=" mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={"/chat"}
                className=" rounded-md bg-white/20 dark:bg-black/20 px-3.5 py-2.5 text-sm font-semibold text-black dark:text-white shadow-sm dark:hover:bg-black/30 hover:bg-white/30  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all"
              >
                Get started
              </Link>
              <Link
                href={"/pricing"}
                className=" group text-sm font-semibold leading-6 text-black dark:text-white flex items-center gap-x-3"
              >
                View Pricing{" "}
                <span aria-hidden="true" className="">
                  <ArrowRightIcon className="opacity-70 group-hover:translate-x-1 transition-all" />
                </span>
              </Link>
            </div>
          </div>

          <div className=" mt-16 flow-root sm:mt-24">
            <div className=" -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                unoptimized
                src={""}
                alt="App screenshot"
                width={2432}
                height={1442}
                className=" rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
