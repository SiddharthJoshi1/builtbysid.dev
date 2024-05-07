"use client";

import Image from "next/image";

interface titleProps {
  personalProfileBody?: string;
}

export default function TopPage(props: titleProps) {
  return (
    <div className=" w-screen lg:h-[700px] grid grid-cols-1 lg:grid-cols-2 bg-no-repeat bg-center bg-cover bg-[url('/assets/images/wave-haikei.svg')]">
      <div className=" flex flex-col items-start justify-start p-8 2xl:py-10 2xl:px-28">
        <div>
          <p className=" text-3xl max-sm:text-center xl:text-4xl  font-extrabold">
            HEY I&apos;M SID 👋
          </p>
          <br></br>
          <br></br>
          <p className="text-left  text-base xl:text-xl font-semibold">
            {props.personalProfileBody}
          </p>
          <br></br>
          <div className="mb-5 py-5 px-2 xl:w-8/12 flex flex-row justify-center items-center border-4 rounded-md border-flame/50 ">
            <Image
              className="m-1"
              src={"/assets/images/sparkles.svg"}
              alt="Linkedin"
              width={32}
              height={32}
            />
            <p className="text-flame text-center  text-xl xl:text-xl  font-semibold text-wrap">
              Young Tech Person of the Year Birmingham 2021/2022
            </p>
          </div>
          <br></br>
          <div
            id="buttonRow"
            className="flex max-sm:flex-col flex-row  items-center  md:items-start"
          >
            <a
              className=" bg-oil hover:bg-gray-800  hover:cursor-pointer p-3 max-sm:m-5 md:mr-10 rounded-md "
              href="/assets/data/Siddharth Joshi Software Developer Resume.pdf"
              download={"Siddharth Joshi Software Developer Resume.pdf"}
            >
              <p className=" text-xl font-bold">Get my CV</p>
            </a>
            <a
              className="max-sm:m-5 md:mr-10 "
              href="https://www.linkedin.com/in/siddharth-joshi-/"
            >
              <Image
                className="hover:contrast-150"
                src={"/assets/images/linkedin-original.svg"}
                alt="Linkedin"
                width={50}
                height={50}
              />
            </a>
            <a className="max-sm:m-5" href="https://github.com/SiddharthJoshi1">
              <Image
                className="hover:contrast-150"
                src={"/assets/images/github.svg"}
                alt="Linkedin"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start ">
        <Image
          className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]"
          src={"/assets/images/sid.svg"}
          alt="Sid Image"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}
