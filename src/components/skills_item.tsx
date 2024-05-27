interface skillsProps {
  skillsArray: Array<string>;
  className : string;
}

export default function SkillsItem(props: skillsProps){
    return (
      <div className={props.className}>
        {props.skillsArray.map((skill, i) => (
          <div
            key={i}
            className="bg-vanilla rounded-full text-black font-extrabold p-1 text-center hover:bg-beige"
          >
            {" "}
            {skill}{" "}
          </div>
        ))}
      </div>
    );
}