"use client";

import Image from "next/image";

interface projectProps {
  projects?: Array<project>;
}

export default function ProjectSection(props: projectProps) {
  return (
    <div className="w-screen flex flex-col  p-8 2xl:py-10 2xl:px-20">
      <p className=" text-3xl max-sm:text-start xl:text-4xl  font-extrabold">
        SOME OF MY PROJECTS ⚒️
      </p>
      <br></br>
      <br></br>

      <div className=" grid grid-cols-1 lg:grid-cols-5 gap-5  ">
        {/* proj 1 */}
        <div className="h-[300px] lg:h-[500px] flex lg:col-span-2 flex-col items-center justify-start bg-rich-black hover:bg-oil ">
          <div className="w-full">
            <div className="h-[150px] md:h-[200px] lg:h-[300px] bg-[url('/assets/images/drug_allergy_app_image.svg')] bg-no-repeat bg-cover"></div>
            <p className=" p-5  max-sm:text-start md:text-xl  lg:text-2xl  font-extrabold">
              Drug Allergy App
            </p>
          </div>
        </div>
        {/* proj */}
        <div className="h-[300px] lg:h-[500px] flex lg:col-span-3 flex-col items-center justify-start bg-rich-black ">
          <div className="w-full">
            <div className="h-[150px] md:h-[200px] lg:h-[300px] bg-[url('/assets/images/open_hack_image.svg')] bg-no-repeat bg-cover"></div>
            <p className=" p-5   max-sm:text-start md:text-xl  lg:text-2xl font-extrabold">
              Birmingham Open Hack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
