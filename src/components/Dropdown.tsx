"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import Image from "next/image";
import { useRef, useState } from "react";

export const Dropdown = () => {
  gsap.registerPlugin(useGSAP, MotionPathPlugin);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const item1Ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>();
  const curviness = 2;

  const triggerPath = [
    { x: 0, y: 0 },
    { x: 40, y: -100 },
    { x: 20, y: -300 },
  ];

  const item1Path = [
    { x: 0, y: 0 },
    { x: -40, y: 80 },
    { x: -20, y: 200 },
  ];

  useGSAP(() => {
    if (isOpen) {
      gsap.to(".trigger", {
        motionPath: {
          path: triggerPath, // Define curve points
          curviness, // Higher value makes it more curved
        },
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(".item1", {
        boxShadow: "-5px 5px 2rem 0.2rem #300c0c83",
        motionPath: {
          path: item1Path, // Define curve points
          curviness, // Higher value makes it more curved
        },
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else if (isOpen === false) {
      gsap.to(".trigger", {
        motionPath: {
          path: triggerPath.reverse(),
          curviness,
        },
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(".item1", {
        boxShadow: "-5px 5px 2rem 0.2rem transparent",
        motionPath: {
          path: item1Path.reverse(),
          curviness,
        },
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Escape") {
      setIsOpen(false);
    }
    if (e.key === "ArrowDown" && isOpen) {
      item1Ref.current?.focus();
    }
  };

  return (
    <div className="relative flex w-full justify-center">
      <button
        ref={triggerRef}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onKeyDown={handleKeyDown}
        className="trigger flex flex-col gap-2 z-[5] items-center justify-center w-64 h-64 rounded-full text-[#460c19] bg-[#f5f0f0] select-none"
        style={{
          boxShadow: "-5px 5px 2rem 0.2rem #300c0c83",
        }}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/60135263?v=4&size=64"
          alt="Avatar"
          width={64}
          height={64}
          priority
          aria-hidden
          onDragStart={(e) => e.preventDefault()}
        />

        <h1 className="text-3xl font-bold">Stian</h1>
      </button>

      <div
        role="button"
        tabIndex={isOpen ? 0 : -1}
        className="item1 absolute bottom-0 flex flex-col p-10 items-center justify-center z-[4] bg-[#460c19] w-48 h-48 rounded-full select-none"
        style={{
          boxShadow: "-5px 5px 2rem 0.2rem transparent",
        }}
        ref={item1Ref}
        onKeyDown={(e) => {
          e.stopPropagation();
          if (e.key === "Escape") {
            setIsOpen(false);
            triggerRef.current?.focus();
          }
          if (e.key === "ArrowUp" && isOpen) {
            triggerRef.current?.focus();
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
      >
        <p className="text-[#f5f0f0]">Full-stack utvikler hos BOB BBL</p>
      </div>
    </div>
  );
};
