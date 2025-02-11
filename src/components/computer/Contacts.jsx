import { GithubIcon, LinkedinIcon } from "lucide-react";
import Folder from "./Folder";

export default function Contacts(props) {
  const { idx } = props;

  return (
    <Folder name={"contacts"} idx={idx}>
      <div className="text-[3px] p-[2px]">
        <p>Email: makiwebdeveloper@gmail.com</p>
        <a
          href="https://github.com/makiwebdeveloper"
          target="_blank"
          className="mt-[1px] w-fit flex items-center gap-[1px] hover:text-blue-500"
        >
          <GithubIcon className="w-[4px] h-[4px]" /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/makiwebdeveloper"
          target="_blank"
          className="mt-[2px] w-fit flex items-center gap-[1px] hover:text-blue-500"
        >
          <LinkedinIcon className="w-[3.8px] h-[3.8px]" /> LinkedIn
        </a>
      </div>
    </Folder>
  );
}
