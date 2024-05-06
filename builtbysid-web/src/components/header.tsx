"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className=" flex flex-col md:flex-row  items-center  justify-between px-24 overflow-hidden">
      <div>
        <Image
          src={"/assets/logos/SiD.png"}
          alt="Built By Sid Logo"
          width={220}
          height={220}
        />
      </div>
      <div className=" w-1/3 flex  flex-col md:flex-row items-center justify-between">
        <p className=" text-xl p-3 font-bold hover:text-beige hover:cursor-pointer ">
          Projects
        </p>
        <p className=" text-xl p-3 font-bold hover:text-beige hover:cursor-pointer ">
          Experience
        </p>
        <button
          className=" bg-oil hover:bg-gray-800  hover:cursor-pointer p-3 rounded-md "
          onClick={(e) =>
            (window.location.href = "mailto:contact@builtbysid.dev")
          }
        >
          <p className="text-xl font-bold">Contact Me</p>
        </button>
      </div>
    </div>
  );
}
