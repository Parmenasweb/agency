"use client";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

// /create the navigation links
const links = [
  {
    name: "programs & destination",
    path: "/programs",
  },
  {
    name: "schorlarship",
    path: "/schorlarships",
  },
  {
    name: "Blogs",
    path: "/blog",
  },
  {
    name: "about us",
    path: "/about",
  },
  {
    name: "contact us",
    path: "/contact",
  },
];

export function MobileNav() {}

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="flex flex-row mt-1 border-slate-400 rounded-xl border items-center justify-between w-[97%] px-1 py-2 mx-auto">
      <div className="mr-2 flex flex-row ">
        <Link className="" href="/">
          <Image
            className="rounded-lg"
            src="/logotrans.jpeg"
            alt="Logo"
            objectFit="contain"
            width={200}
            height={150}
          />
        </Link>
        {/* <div className="flex flex-col items-start pl-2 justify-center">
          <h1 className="capitalize text-xl ">studyjetglobal</h1>
          <p className="text-sm">connecting dreams worldwide...</p>
        </div> */}
      </div>

      <div className="flex gap-8 flex-row items-center justify-end w-[50%]">
        <Sheet className="">
          <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-white md:hidden sm:flex" />
          </SheetTrigger>
          <SheetContent>
            <div className="mt-20 mb-20 text-center flex items-center justify-center text-2xl">
              <Image
                src="/logotrans.jpeg"
                alt="Logo"
                objectFit="contain"
                width={150}
                height={150}
              />
            </div>
            {/* navigation for mobile */}
            <nav className="flex flex-col justify-center items-center gap-1 mb-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className={`capitalize flex items-center justify-center w-full text-lg py-3 hover:text-green-500 transition-all ${
                    link.path === pathName &&
                    "text-green-500 border-b-2 border-green-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex py-3 items-center justify-center">
              <Button className="font-semibold">Book a Call</Button>
            </div>
          </SheetContent>
        </Sheet>

        <div className="desktop-nav sm:hidden md:flex gap-8 flex flex-row items-center justify-end ">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathName &&
                "text-accent border-b-2 border-green-500"
              } capitalize flex items-center font-medium hover:text-green-500 transition-all`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-end  ml-6">
            <Button>Book a Call</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
