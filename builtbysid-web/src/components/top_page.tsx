"use client";

import Image from "next/image";

export default function TopPage() {
  return (
    <div className=" w-screen h-[700px] grid grid-cols-1 md:grid-cols-2 bg-no-repeat bg-center bg-cover bg-[url('/assets/images/wave-haikei.svg')]">
      <div className=" flex flex-col items-start justify-start p-28 ">
        <div>
          <p className="  text-4xl font-extrabold">HEY I&apos;M SID 👋</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Image
          src={"/assets/images/sid.svg"}
          alt="Sid Image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
