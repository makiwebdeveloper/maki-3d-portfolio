import { useStorage } from "../hooks/useStorage";
import { cn } from "../lib/utils";
import { skillsList } from "../constants/skills-list";

export default function SkillsText() {
  const { light, activeSection, selectedSkill } = useStorage();

  const skill = skillsList.find((item) => item.slug === selectedSkill) || null;

  return (
    <div
      className={cn(
        "absolute flex flex-col text-end justify-end p-[10px] top-[30px] right-[50px] z-10 transition-all delay-100 duration-700",
        !light || activeSection !== 2 ? "opacity-0 pointer-events-none" : ""
      )}
    >
      <p className="font-bold text-[64px]">{skill ? skill.title : "Skills"}</p>
      <p>
        {skill
          ? skill.text
          : "HTML/CSS/JS, TypeScript, React.js, Next.js, Express, Nest.js, SQL, Solidity"}
      </p>
    </div>
  );
}
