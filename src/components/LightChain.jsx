import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useStorage } from "../hooks/useStorage";

const PullLampChain = () => {
  const { toggleLight } = useStorage();
  const chainRef = useRef(null);
  const blurRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handlePull = () => {
    setIsDisabled(true);
    toggleLight();
    gsap.to(chainRef.current, {
      y: 20,
      duration: 0.4,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
    setTimeout(() => {
      setIsDisabled(false);
    }, 1_000);
  };

  useEffect(() => {
    gsap.to(blurRef.current, {
      opacity: 0,
      duration: 0.8,
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <button
      ref={chainRef}
      onClick={handlePull}
      disabled={isDisabled}
      className="absolute top-[-32px] left-[50px] cursor-pointer z-10"
    >
      <div
        className="w-[6px] h-[120px] bg-yellow-500 rounded-full"
        style={{
          backgroundImage: `linear-gradient(130deg, #757272 10%, #ffffff 11%, #726f6f 62%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-[-6px] w-[18px] h-[18px] bg-yellow-500 rounded-full mt-2"
        style={{
          backgroundImage: `linear-gradient(130deg, #757272 10%, #ffffff 11%, #726f6f 62%)`,
        }}
      />
      <div
        ref={blurRef}
        className="absolute bottom-[-7px] left-[-13px] w-[32px] h-[32px] rounded-full blur-[10px] opacity-70"
        style={{
          backgroundImage: `linear-gradient(130deg, #757272 10%, #ffffff 11%, #726f6f 62%)`,
        }}
      ></div>
    </button>
  );
};

export default PullLampChain;
