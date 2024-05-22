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
              className={`h-[200px] md:h-[250px] lg:h-[350px] bg-[url('/${props.image_url}')] bg-no-repeat bg-cover`}
            ></div>
            <p className="p-4 max-sm:text-start text-xl  lg:text-2xl  font-extrabold">
              {props.title}
            </p>

            <button className=" items-end justify-items-end m-4 p-2 bg-electric-indigo hover:bg-violet-950 text-white text-sm font-extrabold rounded-full">
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