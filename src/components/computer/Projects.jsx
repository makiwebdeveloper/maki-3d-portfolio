import { GithubIcon } from "lucide-react";
import Folder from "./Folder";

const projectsList = [
  {
    title: "ACars",
    url: "https://acars.ua/",
    github: null,
  },
  {
    title: "American Express",
    url: "https://americanexpress.in.ua/",
    github: null,
  },
  {
    title: "Soundy",
    url: "https://soundy-music.vercel.app/",
    github: "https://github.com/makiwebdeveloper/soundy",
  },
  {
    title: "Four Game",
    url: "https://four-game-maki.netlify.app",
    github: "https://github.com/makiwebdeveloper/four-game",
  },
  {
    title: "Memory Game",
    url: "https://memory-game-maki.netlify.app",
    github: "https://github.com/makiwebdeveloper/memory-game",
  },
  {
    title: "Pacman",
    url: "https://pacman-oop.netlify.app/",
    github: "https://github.com/makiwebdeveloper/pacman-oop",
  },
];

export default function Projects(props) {
  const { idx } = props;

  return (
    <Folder name={"projects"} idx={idx} className={"h-[63px]"}>
      <div className="flex flex-col gap-[1px] text-[3px] p-[1px]">
        {projectsList.map((project) => (
          <div
            key={project.title}
            className="h-[6px] flex items-center justify-between cursor-pointer hover:bg-white/10 rounded-[1px] p-[1px]"
          >
            <a
              href={project.url}
              target="_blank"
              className="transition hover:text-blue-500"
            >
              {project.title}
            </a>
            {project.github && (
              <a href={project.github} target="_blank">
                <GithubIcon className="w-[3px] h-[3px] transition hover:text-blue-500" />
              </a>
            )}
          </div>
        ))}
        <p className="p-[1px] text-white/50">More in CV..</p>
      </div>
    </Folder>
  );
}
