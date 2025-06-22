import Image from "next/image";
import React from "react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

interface SectionProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

interface PointsProps {
  points: {
    title: string;
    content?: string;
    icon?: StaticImport | string;
    link?: string;
  }[];
}

export function Points({ points }: PointsProps) {
  return (
    <ul className="flex flex-col gap-4">
      {points.map((point, index) => {
        const icon = point.icon ?? "/arrow.svg";
        const content = (
          <>
            <Image
              className="flex-shrink-0"
              src={icon}
              alt={point.title}
              width={24}
              height={24}
            />
            <div>
              <h1 className="text-lg font-bold xl:text-xl">{point.title}</h1>
              {point.content && (
                <p className="text-md text-gray-700 xl:text-lg">
                  {point.content}
                </p>
              )}
            </div>
          </>
        );

        return (
          <li key={index} className="flex items-center gap-4">
            {point.link ? (
              <Link
                href={point.link}
                className="flex w-full items-center gap-4 rounded-2xl outline-0 duration-500 hover:scale-105 hover:cursor-none"
              >
                {content}
              </Link>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="text-primary flex w-full flex-col gap-8 p-8 xl:max-w-2xl xl:min-w-2xl">
      {title && (
        <>
          <div className="text-2xl font-extrabold xl:text-4xl">{title}</div>
          <div className="bg-primary h-1 w-full rounded-full xl:w-xs" />
        </>
      )}
      <div className="text-lg text-gray-700 xl:text-xl">{children}</div>
    </div>
  );
}
