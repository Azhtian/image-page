"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export const Clouds = () => {
  gsap.registerPlugin(useGSAP);
  const cloudsFront = useRef<HTMLDivElement>(null);
  const cloudsMid = useRef<HTMLDivElement>(null);
  const cloudsBack = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(".cloudsFront", {
      x: "-400px",
      ease: "linear",
      duration: 10,
      repeat: -1,
    });

    gsap.to(".cloudsMid", {
      x: "-260px",
      ease: "linear",
      duration: 12,
      repeat: -1,
    });

    gsap.to(".cloudsBack", {
      x: "-140px",
      ease: "linear",
      duration: 15,
      repeat: -1,
    });
  });

  return (
    <>
      <div
        ref={cloudsFront}
        className="cloudsFront fixed bottom-0 left-0 w-[200vw] z-[2] h-[400px]"
        style={{
          background: "url(/sky-front.svg) repeat-x transparent",
          backgroundSize: "400px",
        }}
      ></div>
      <div
        ref={cloudsMid}
        className="cloudsMid fixed bottom-0 left-0 w-[200vw] z-0 h-[400px]"
        style={{
          background: "url(/sky-front.svg) repeat-x transparent",
          backgroundSize: "260px",
          backgroundPositionY: "20px",
        }}
      ></div>
      <div
        ref={cloudsBack}
        className="cloudsBack fixed bottom-0 left-0 w-[200vw] z-0 h-[400px]"
        style={{
          background: "url(/sky-front.svg) repeat-x transparent",
          backgroundSize: "140px",
          backgroundPositionY: "50px",
        }}
      ></div>
      <div
        className="fixed flex bottom-0 left-0 w-[200vw] z-0 h-[400px]"
        style={{
          background: "url(/sky-front.svg) repeat-x transparent",
          backgroundSize: "100px",
          backgroundPositionY: "55px",
        }}
      ></div>
    </>
  );
};
