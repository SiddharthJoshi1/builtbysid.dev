'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SkillsItem from "./skills_item";
interface experienceItemProps {
  title: string;
  role: string;
  location: string;
  dates: string;
  description: string;
  skills: string;
}



export default function ExperienceItem(props: experienceItemProps) {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    function handleAccordionOpen(): void{
        console.log("handling accordion open")
        setIsAccordionOpen(!isAccordionOpen);
    }


  return (
    <div>
      <div className=" bg-rich-black  border-vanilla border-4 rounded-md">
        <div
          id="sideSplit"
          className=" h-full  p-4  flex flex-row justify-between items-center"
        >
          <div id="right-side">
            <p className=" text-lg  md:text-2xl font-extrabold">
              {props.title}
            </p>
            <p className=" md:py-5 text-sm md:text-lg font-bold">
              {props.role}
            </p>
            <p className=" text-sm md:text-lg font-bold">{props.location} 📌</p>
            <p className=" flex md:hidden text-sm md:text-lg font-bold ">
              {props.dates}
            </p>
          </div>
          <div
            id="left-side"
            className="md:flex md:flex-row md:items-center md:justify-between "
          >
            <p className=" max-sm:hidden md:text-lg font-bold pr-5 ">
              {props.dates}
            </p>

            <Image
              onClick={handleAccordionOpen}
              className="  h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
              src={
                isAccordionOpen
                  ? "/assets/images/round-box-cross.svg"
                  : "/assets/images/round-box-plus.svg"
              }
              alt="open/close image"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
      {isAccordionOpen && (
        <>
          <br></br>
          <div className=" bg-oil rounded-md">
            <div className=" p-6 md:p-10 flex flex-col justify-center items-center md:justify-start md:items-start ">
              <p className="max-sm:text-sm font-medium max-lg:whitespace-pre-line">
                {props.description}
              </p>
              <br></br>
              <SkillsItem
                key={"skillItem"}
                className = "text-sm grid  max-[400px]:grid-cols-2 grid-cols-3  gap-3 md:grid-cols-5 md:gap-4 lg:grid-cols-7 lg:gap-5 xl:grid-cols-12 xl:gap-6 "
                skillsArray={props.skills.split(",")}
              ></SkillsItem>
            </div>
          </div>
        </>
      )}
    </div>
  );
  
}


