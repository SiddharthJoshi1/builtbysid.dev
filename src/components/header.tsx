"use client";

import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

function scrollIntoView(
  mouseEvent:any,
  href: string
) {
  mouseEvent.preventDefault();
  document.getElementById(href)!.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
const pathname = usePathname();

  return (
    <div className=" flex flex-col lg:flex-row  items-center  justify-between md:pl-2 md:pr-8 2xl:px-24 overflow-hidden">
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
      {pathname == "/" ? (
        <div className=" w-1/2 xl:w-1/3 flex  flex-col lg:flex-row items-center justify-between">
          <a
            onClick={(e) => {
              scrollIntoView(e, "projects-section");
            }}
            href="#projects-section"
            className=" text-xl p-3 font-bold hover:text-beige hover:cursor-pointer "
          >
            Projects
          </a>
          <a
            href="#experience-section"
            onClick={(e) => {
              scrollIntoView(e, "experience-section");
            }}
            className=" text-xl p-3 font-bold hover:text-beige hover:cursor-pointer "
          >
            Experience
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
      ) : (
        <div className=" flex  flex-col lg:flex-row items-center justify-between">
          <button
            className=" bg-oil hover:bg-gray-800  hover:cursor-pointer p-3 rounded-md "
            onClick={(e) =>
              (window.location.href = "mailto:contact@builtbysid.dev")
            }
          >
            <p className="text-xl font-bold">Contact Me</p>
          </button>
        </div>
      )}
    </div>
  );
}
