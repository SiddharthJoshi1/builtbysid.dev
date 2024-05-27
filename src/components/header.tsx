"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className=" flex flex-col lg:flex-row  items-center  justify-between  md:px-24 overflow-hidden">
      <div>
        <a href="/">
          <Image
            src={"/assets/logos/SiD.png"}
            alt="Built By Sid Logo"
            width={200}
            height={200}
          />
        </a>
      </div>
      <div className=" w-1/2 xl:w-1/3 flex  flex-col lg:flex-row items-center justify-between">
        <a
          href="#projects-section"
          className=" text-xl p-3 font-bold hover:text-beige hover:cursor-pointer "
        >
          Projects
        </a>
        <a href="#experience-section">
          <p className=" text-xl p-3 font-bold hover:text-beige hover:cursor-pointer ">
            Experience
          </p>
        </a>
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
