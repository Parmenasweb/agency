import Link from "next/link";
import { Button } from "../ui/button";
import { GiJetFighter } from "react-icons/gi";
import PageTitle from "../pageTitle";

export default function HeroSection() {
  return (
    <main className="min-h-[55vh] flex-col-reverse gap-14 lg:gap-0 lg:flex-row w-[95%] my-5 mx-auto flex items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold ">
          unlock the world{" "}
          <GiJetFighter className=" inline-block text-green-500 font-l animate-bounce" />{" "}
          <br /> with{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"Studyjet."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          Discover new cultures, expand your horizons and gain a global
          perspective , with our top rated study abroad programs into
          transforming your future...
        </p>
        {/* <Button>Explore Programs</Button> */}
        <Link
          href={"/programs"}
          className="inline-block hover:text-green-500 transition-all"
        >
          <PageTitle text=" Explore Programs" />
        </Link>
      </div>
      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
    </main>
  );
}
