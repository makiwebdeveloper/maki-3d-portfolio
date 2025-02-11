import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useStorage } from "../hooks/useStorage";

export default function Logo() {
  const mRef = useRef(null);
  const aRef = useRef(null);
  const kRef = useRef(null);
  const iRef = useRef(null);
  const { light, activeSection } = useStorage();

  function showLogo() {
    if (!mRef.current) return;
    if (!aRef.current) return;
    if (!kRef.current) return;
    if (!iRef.current) return;

    gsap.to(mRef.current, {
      marginTop: 100,
      duration: 1.5,
      ease: "circ.out",
      delay: 0.4,
      opacity: 1,
    });
    gsap.to(aRef.current, {
      marginTop: 100,
      duration: 1.5,
      ease: "circ.out",
      delay: 0.2,
      opacity: 1,
    });
    gsap.to(kRef.current, {
      marginTop: 100,
      duration: 1.5,
      ease: "circ.out",
      delay: 0.5,
      opacity: 1,
    });
    gsap.to(iRef.current, {
      marginTop: 100,
      duration: 1.5,
      ease: "circ.out",
      delay: 0.3,
      opacity: 1,
    });
  }

  function hideLogo() {
    if (!mRef.current) return;
    if (!aRef.current) return;
    if (!kRef.current) return;
    if (!iRef.current) return;

    gsap.to(mRef.current, {
      marginTop: 0,
      duration: 1,
      ease: "circ.in",
      delay: 0.2,
      opacity: 0,
    });
    gsap.to(aRef.current, {
      marginTop: 0,
      duration: 1,
      ease: "circ.in",
      delay: 0.1,
      opacity: 0,
    });
    gsap.to(kRef.current, {
      marginTop: 0,
      duration: 1,
      ease: "circ.in",
      delay: 0.25,
      opacity: 0,
    });
    gsap.to(iRef.current, {
      marginTop: 0,
      duration: 1,
      ease: "circ.in",
      delay: 0.15,
      opacity: 0,
    });
  }

  useEffect(() => {
    if (light && activeSection === 1) {
      showLogo();
    } else {
      hideLogo();
    }
  }, [light, activeSection]);

  return (
    <div className="absolute z-10 left-[50%] translate-x-[-50%]">
      <div className="flex justify-center items-start mt-[-120px]">
        <img src="images/logo/logo-m.svg" alt="" ref={mRef} />
        <img src="images/logo/logo-a.svg" alt="" ref={aRef} />
        <img src="images/logo/logo-k.svg" alt="" ref={kRef} />
        <img src="images/logo/logo-i.svg" alt="" ref={iRef} />
      </div>
    </div>
  );
}
