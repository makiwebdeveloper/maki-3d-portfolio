import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "../lib/utils";
import { useStorage } from "../hooks/useStorage";

export default function PulsingCircle(props) {
  const { children, focused, onClick, className } = props;
  const circleRefs = useRef([]);
  const { light } = useStorage();

  useEffect(() => {
    circleRefs.current.forEach((circle, index) => {
      gsap.fromTo(
        circle,
        { scale: 1, opacity: 0.4 },
        {
          scale: 1.5,
          opacity: 0,
          duration: 1,
          repeat: -1,
          repeatDelay: 1,
          ease: "power2.out",
          delay: index * 0.4,
        }
      );
    });
  }, []);

  return (
    <div
      className={cn(
        "transition-opacity duration-500 flex items-center justify-center",
        light && focused ? "opacity-100" : "opacity-10",
        className
      )}
    >
      <div className="relative w-[60px] h-[60px] flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (circleRefs.current[i] = el)}
            className="absolute w-[60px] h-[60px] rounded-full border-4 border-white"
          />
        ))}

        <button
          onClick={onClick}
          className="cursor-pointer scale-x-[-1] w-[50px] h-[50px] rounded-full border-4 border-white hover:bg-white/40 flex items-center justify-center transition"
        >
          <div>{children}</div>
        </button>
      </div>
    </div>
  );
}
