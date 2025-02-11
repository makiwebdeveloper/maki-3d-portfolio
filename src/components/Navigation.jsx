import { cn } from "../lib/utils";
import { useStorage } from "../hooks/useStorage";

export default function Navigation() {
  const { light, activeSection, setNavigationAnchor } = useStorage();

  return (
    <div
      className={cn(
        "flex flex-col gap-[3px] rounded-full absolute z-10 top-[50%] translate-y-[-50%] left-[40px] transition duration-500",
        light ? "opacity-100" : "opacity-0"
      )}
    >
      {new Array(4).fill(null).map((_, idx) => (
        <button
          key={idx}
          onClick={() => {
            setNavigationAnchor(idx + 1);
          }}
          className="h-[30px] group cursor-pointer"
        >
          <div
            className={cn(
              "transition-all duration-300 w-[30px] h-[3px] group-hover:h-[30px] rounded-full",
              activeSection === idx + 1
                ? "bg-white group-hover:bg-white"
                : "bg-white/20 group-hover:bg-white/50"
            )}
          ></div>
        </button>
      ))}
    </div>
  );
}
