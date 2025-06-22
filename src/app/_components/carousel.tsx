"use client";

import Image from "next/image";
import Link from "next/link";

const techStack = [
  {
    name: "Next.js",
    icon: "/tech/nextjs.svg",
    link: "https://nextjs.org",
  },
  {
    name: "React",
    icon: "/tech/react.svg",
    link: "https://reactjs.org",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwindcss.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "T3",
    icon: "/tech/t3.svg",
    link: "https://create.t3.gg/",
  },
  {
    name: "GSAP",
    icon: "/tech/gsap.svg",
    link: "https://greensock.com/gsap/",
  },
];

export default function InfiniteScroll() {
  return (
    <div className="relative mx-auto mt-20 h-[100px] w-[90%] max-w-[1536px] overflow-hidden">
      {/* Mask gradient effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-transparent via-black/0 to-transparent"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
        }}
      ></div>

      {techStack.map((item, index) => (
        <div
          key={item.name}
          className="animate-scroll-left absolute h-[100px] w-[200px] rounded-md"
          style={{
            left: "max(calc(200px * 8), 100%)",
            animationDelay: `${(30 / 6) * (6 - index) * -1}s`,
            animationDuration: "30s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <Link
            href={item.link}
            target="_blank"
            className="hover:cursor-none"
            data-hover="true"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={100}
              height={100}
              className="object-contain duration-300 hover:scale-105"
            />
          </Link>
        </div>
      ))}

      <style jsx>{`
        @keyframes scroll-left {
          to {
            left: -200px;
          }
        }
        .animate-scroll-left {
          animation-name: scroll-left;
        }
      `}</style>
    </div>
  );
}
