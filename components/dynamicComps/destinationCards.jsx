"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function DestinationCard({
  name,
  flagUrl,
  backgroundUrl,
  studyCost,
  livingCost,
}) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className={cn(
        " cursor-pointer overflow-hidden relative card h-64 rounded-md shadow-xl w-[20%]  mx-auto backgroundImage flex flex-col justify-between  p-4",
        " bg-cover"
      )}
    >
      <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-30"></div>
      <div className="flex flex-row items-center justify-between space-x-4 z-10">
        <Image
          height="50"
          width="50"
          alt="Avatar"
          src={`${flagUrl}`}
          className=" object-cover"
        />
      </div>
      <div className="text content">
        <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          Study in {name}
        </h1>
        <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Study budget - ${studyCost}/year <br /> Living Cost- ${livingCost}
          /month
        </p>
      </div>
    </div>
  );
}
