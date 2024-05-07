import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
    title:string,
    image_url:string,
    description:string,
    isWide:boolean,
}

export default function ProjectItem(props: ProjectProps) {
    return (
      <div
        className={`${
          props.isWide.toString() == "true" ? "lg:col-span-3" : "lg:col-span-2"
        }`}
      >
        <div className=" h-[350px] md:h-[380px] lg:h-[500px] flex flex-col items-center  justify-start bg-rich-black">
          <div className="w-full">
            <div
              className={`h-[120px] md:h-[200px] lg:h-[300px] bg-[url('/${props.image_url}')] bg-no-repeat bg-cover`}
            ></div>
            <p className="px-2 py-2 max-sm:text-start md:text-xl  lg:text-2xl  font-extrabold">
              {props.title}
            </p>
            <p className=" px-2 py-1 max-sm:text-start text-xs xl:text-base  overflow-clip">
              {props.description}
            </p>
            <button className=" items-end justify-items-end m-1 p-2 bg-electric-indigo hover:bg-violet-950 text-white text-sm font-extrabold rounded-full">
              <Link
                href={{
                  pathname: `projects/${props.title}`,
                }}
              >
                View Details
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
}