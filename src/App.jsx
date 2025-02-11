import ThreeCanvas from "./components/ThreeCanvas";
import LightChain from "./components/LightChain";
import { useStorage } from "./hooks/useStorage";
import { cn } from "./lib/utils";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import SkillsText from "./components/SkillsText";

// #060414

export default function App() {
  const { light } = useStorage();

  return (
    <div
      className={`duration-500 w-screen h-screen`}
      style={{
        background:
          "radial-gradient(circle, #000000, #000000, #000000, #000000, #000000)",
      }}
    >
      <div
        className={cn(
          "fixed w-full h-full transition-opacity duration-500",
          light ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(circle, #0a043b, #0c0431, #0c0428, #0a041e, #060414)`,
        }}
      ></div>
      <LightChain />
      <Logo />
      <Navigation />
      <SkillsText />
      <ThreeCanvas />
    </div>
  );
}
