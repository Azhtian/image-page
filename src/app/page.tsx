import { Clouds } from "@/components/Clouds";
import { Dropdown } from "@/components/Dropdown";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="dot-background"></div>
      <Clouds />
      <main className="flex row-start-2 w-full relative justify-center">
        <Dropdown />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Azhtian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Github
        </a>
      </footer>
    </div>
  );
}
