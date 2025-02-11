import {
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  MailIcon,
  MailOpenIcon,
} from "lucide-react";
import { useComputer } from "../../hooks/useComputer";
import Contacts from "./Contacts";
import Projects from "./Projects";

const foldersList = [
  {
    name: "contacts",
    component: Contacts,
  },
  {
    name: "projects",
    component: Projects,
  },
];

export default function ComputerDesktop() {
  const { activeFolders, toggleActiveFolder } = useComputer();

  return (
    <div className="relative bg-[#000] grid grid-cols-1 grid-rows-4 overflow-hidden scale-x-[-1] rounded-[2px] text-[6px] w-[94.9px] h-[80px]">
      <button
        onClick={() => {
          toggleActiveFolder("projects");
        }}
        className="w-[10px] h-[10px] cursor-pointer"
      >
        {activeFolders.find((i) => i === "projects") ? (
          <FolderOpenIcon className="w-full h-full" />
        ) : (
          <FolderIcon className="w-full h-full" />
        )}
        <p className="text-[2.8px]">Projects</p>
      </button>
      <button
        onClick={() => {
          toggleActiveFolder("contacts");
        }}
        className="w-[10px] h-[10px] cursor-pointer"
      >
        {activeFolders.find((i) => i === "contacts") ? (
          <MailOpenIcon className="w-full h-full" />
        ) : (
          <MailIcon className="w-full h-full" />
        )}
        <p className="text-[2.8px]">Contacts</p>
      </button>
      <button
        onClick={() => {
          window.open("cv_light.pdf", "_target");
        }}
        className="w-[10px] h-[10px] cursor-pointer"
      >
        <FileIcon className="w-full h-full block" />
        <p className="text-[2.8px]">CV</p>
      </button>
      {activeFolders.map((folder, idx) => {
        const active = foldersList.find((i) => i.name === folder);
        return <active.component key={idx} idx={idx} />;
      })}
    </div>
  );
}
