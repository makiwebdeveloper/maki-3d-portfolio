import { XIcon } from "lucide-react";
import { useComputer } from "../../hooks/useComputer";
import { cn } from "../../lib/utils";

export default function Folder({ children, name, idx, className }) {
  const { removeActiveFolder } = useComputer();

  return (
    <div
      className={cn(
        `w-[70px] h-[50px] bg-black absolute border-[1px] rounded-[3px]`,
        className
      )}
      style={{
        top: idx * 4 + "px",
        right: idx * 4 + "px",
      }}
    >
      <div className="flex flex-col items-end">
        <button
          onClick={() => removeActiveFolder(name)}
          className="p-[1px] cursor-pointer transition hover:text-red-400"
        >
          <XIcon className="w-[5px] h-[5px]" />
        </button>
        <div className="h-[1px] w-full bg-white"></div>
      </div>
      {children}
    </div>
  );
}
