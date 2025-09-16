import Link from "next/link";
import Section, { Points } from "./_components/section";
import Image from "next/image";
import InfiniteScroll from "./_components/carousel";
const profileImage = (
  <Link
    className="outline-primary relative mx-auto flex h-40 w-40 items-center justify-center rounded-full outline-4 outline-dashed hover:cursor-none sm:h-52 sm:w-52 md:h-64 md:w-64"
    href="https://linktree-orpin-theta.vercel.app/"
  >
    <Image
      src="/Profile.jpg"
      alt="Profile Picture"
      width={250}
      height={250}
      className="relative z-10 h-full w-full rounded-full object-cover"
    />
  </Link>
);

const leftSections = [
  {
    title: undefined,
    content: profileImage,
  },
  {
    title: "Contact",
    content: (
      <Points
        points={[
          {
            title: "+62-8123-1867-768",
            icon: "/phone.svg",
            link: "https://wa.me/6281231867768",
          },
          {
            title: "Fahrell.widiatmoko.32@moklet.org",
            icon: "/email.svg",
            link: "mailto:fahrell.widiatmoko.32@moklet.org",
          },
          {
            title: "Malang, East Java",
            icon: "/location.svg",
            link: "https://www.google.com/maps/place/Malang,+East+Java",
          },
        ]}
      />
    ),
  },
  {
    title: "Skills",
    content: (
      <Points
        points={[
          { title: "Software Development" },
          { title: "REST API Integration" },
          { title: "Fullstack Development" },
          { title: "AWS Cloud Computing" },
          { title: "Team Work & Collaboration" },
          { title: "Problem Solving" },
          { title: "Critical Thinking" },
          { title: "Creativity" },
          { title: "Adaptability" },
        ]}
      />
    ),
  },
  {
    title: "Awards",
    content: (
      <Points
        points={[
          {
            title: "Top 10 IoT Earth Competition 2023",
            content: "Becoming one of the top 10 on that national competition",
            link: "https://www.instagram.com/p/CySx_hvScVJ/",
          },
          {
            title: "Top 27 Moklet Idea Challenge 2025",
            content:
              "Becoming one of the top 27 on that internal competition (Absolver)",
            link: "https://www.instagram.com/p/DKV1HeKT6GD/?img_index=4",
          },
          {
            title:
              "Semifinalist of Fiksi 2024 (Festival Inovasi dan Kewirausahaan Siswa Indonesia)",
            content: "A big national competition for students in Indonesia",
            link: "https://pusatprestasinasional.kemdikbud.go.id/event/riset-dan-inovasi/sma/festival-inovasi-dan-kewirausahaan-siswa-nasional-fiksi-jenjang-sma-tahun-2024-2024-sma",
          },
        ]}
      />
    ),
  },
];
const rightSections = [
  {
    title: (
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl uppercase">Fahrell Sandy</h1>
        <p className="text-4xl font-medium text-gray-500 uppercase">
          Web Enthusiast
        </p>
      </div>
    ),
    content: (
      <p className="">
        I am Fahrell Sandy Zhariif Widiatmoko. I am a student from SMK Telkom
        Malang with <span className="font-medium">2 years</span> experience in
        web and research technologies. I have learned many languages frameworks
        such as <span className="font-medium">Nextjs</span>,
        <span className="font-medium"> Expo</span>,{" "}
        <span className="font-medium">Prisma</span>,{" "}
        <span className="font-medium">Mendix</span> and more!
      </p>
    ),
  },
  {
    title: "Experience",
    content: (
      <Points
        points={[
          {
            title: "Lead Front-End Developer",
            content: "On Moklet Developer Organization (2024-2025)",
            link: "https://www.moklet.org/organisasi/2024-2025/METIC",
          },
          {
            title: "Certified Mendix Rapid Developer",
            content: "Low-code application development platform certification",
            link: "/pdf/MendixRapidDeveloper-97769.pdf",
          },
          {
            title: "Create Front-End Web Application For Pilketos 2024",
            content:
              "A web application for Pilketos 2024 in SMK Telkom Malang (2024)",
            link: "https://e-pilketos.moklet.org/",
          },
          {
            title: "Creating a Full Stack Web App for Counseling",
            content:
              "A web application for counseling in another school (2024)",
            link: "https://smart-counseling.vercel.app/",
          },
          {
            title: "CTO Grounded R&D",
            content:
              "A research and development team mainly focused on IoT (2024-2025)",
            link: "https://go.moklet.org/GroundedLab",
          },
          {
            title:
              "One of IoT Engineer Telkom Indico (On Their Chicken Project)",
            content:
              "A research team from Telkom that focused on Environment (2025)",
            link: "https://www.telkomsel.com/about-us/profil/indico",
          },
        ]}
      />
    ),
  },
  {
    title: "Education",
    content: (
      <Points
        points={[
          {
            title: "SMK Telkom Malang | 2023-Present",
            content: "Major in Software Engineering",
            link: "https://smktelkom-mlg.sch.id/",
          },
          {
            title: "MTsN 1 Kediri | 2020-2023",
            content: "Regular Student",
            link: "https://mtsn1kabkediri.sch.id/",
          },
        ]}
      />
    ),
  },
];
const leftSectionsMobile = [
  {
    title: undefined,
    content: profileImage,
  },
  {
    title: (
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl uppercase">Fahrell Sandy</h1>
        <p className="text-4xl font-medium text-gray-500 uppercase">
          Web Enthusiast
        </p>
      </div>
    ),
    content: (
      <p className="">
        I am Fahrell Sandy Zhariif Widiatmoko. I am a student from SMK Telkom
        Malang with <span className="font-medium">2 years</span> experience in
        web and research technologies. I have learned many languages frameworks
        such as <span className="font-medium">Nextjs</span>,
        <span className="font-medium"> Expo</span>,{" "}
        <span className="font-medium">Prisma</span>,{" "}
        <span className="font-medium">Mendix</span> and more!
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <Points
        points={[
          {
            title: "+62-8123-1867-768",
            icon: "/phone.svg",
            link: "https://wa.me/6281231867768",
          },
          {
            title: "Mail Me!",
            icon: "/email.svg",
            link: "mailto:fahrell.widiatmoko.32@moklet.org",
          },
          {
            title: "Malang, East Java",
            icon: "/location.svg",
            link: "https://www.google.com/maps/place/Malang,+East+Java",
          },
        ]}
      />
    ),
  },
  {
    title: "Skills",
    content: (
      <Points
        points={[
          { title: "Software Development" },
          { title: "REST API Integration" },
          { title: "Fullstack Development" },
          { title: "AWS Cloud Computing" },
          { title: "Team Work & Collaboration" },
          { title: "Problem Solving" },
          { title: "Critical Thinking" },
          { title: "Creativity" },
          { title: "Adaptability" },
        ]}
      />
    ),
  },
];
const rightSectionsMobile = [
  {
    title: "Experience",
    content: (
      <Points
        points={[
          {
            title: "Lead Front-End Developer",
            content: "On Moklet Developer Organization (2024-2025)",
            link: "https://www.moklet.org/organisasi/2024-2025/METIC",
          },
          {
            title: "Certified Mendix Rapid Developer",
            content: "Low-code application development platform certification",
            link: "/pdf/MendixRapidDeveloper-97769.pdf",
          },
          {
            title: "Create Front-End Web Application For Pilketos 2024",
            content:
              "A web application for Pilketos 2024 in SMK Telkom Malang (2024)",
            link: "https://e-pilketos.moklet.org/",
          },
          {
            title: "Creating a Full Stack Web App for Counseling",
            content:
              "A web application for counseling in another school (2024)",
            link: "https://smart-counseling.vercel.app/",
          },
          {
            title: "CTO Grounded R&D",
            content:
              "A research and development team mainly focused on IoT (2024-2025)",
            link: "https://go.moklet.org/GroundedLab",
          },
          {
            title:
              "One of IoT Engineer Telkom Indico (On Their Chicken Project)",
            content:
              "A research team from Telkom that focused on Environment (2025)",
            link: "https://www.telkomsel.com/about-us/profil/indico",
          },
        ]}
      />
    ),
  },
  {
    title: "Education",
    content: (
      <Points
        points={[
          {
            title: "SMK Telkom Malang | 2023-2025",
            content: "Major in Software Engineering",
            link: "https://smktelkom-mlg.sch.id/",
          },
          {
            title: "MTsN 1 Kediri | 2020-2023",
            content: "Regular Student",
            link: "https://mtsn1kabkediri.sch.id/",
          },
        ]}
      />
    ),
  },
  {
    title: "Awards",
    content: (
      <Points
        points={[
          {
            title: "Top 10 IoT Earth Competition 2023",
            content: "Becoming one of the top 10 on that national competition",
            link: "https://www.instagram.com/p/CySx_hvScVJ/",
          },
          {
            title: "Top 27 Moklet Idea Challenge 2025",
            content:
              "Becoming one of the top 27 on that internal competition (Absolver)",
            link: "https://www.instagram.com/p/DKV1HeKT6GD/?img_index=4",
          },
          {
            title:
              "Semifinalist of Fiksi 2024 (Festival Inovasi dan Kewirausahaan Siswa Indonesia)",
            content: "A big national competition for students in Indonesia",
            link: "https://pusatprestasinasional.kemdikbud.go.id/event/riset-dan-inovasi/sma/festival-inovasi-dan-kewirausahaan-siswa-nasional-fiksi-jenjang-sma-tahun-2024-2024-sma",
          },
        ]}
      />
    ),
  },
];
export default async function Home() {
  return (
    <>
      <main className="flex h-full w-full flex-col justify-evenly xl:flex-row">
        <div className="hidden flex-col bg-gray-200 py-8 xl:flex">
          {leftSections.map((section, index) => (
            <Section key={index} title={section.title}>
              {section.content}
            </Section>
          ))}
        </div>
        <div className="hidden flex-col py-8 xl:flex">
          {rightSections.map((section, index) => (
            <Section key={index} title={section.title}>
              {section.content}
            </Section>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-8 bg-gray-200 py-8 xl:hidden">
          {leftSectionsMobile.map((section, index) => (
            <Section key={index} title={section.title}>
              {section.content}
            </Section>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-8 py-8 xl:hidden">
          {rightSectionsMobile.map((section, index) => (
            <Section key={index} title={section.title}>
              {section.content}
            </Section>
          ))}
        </div>
      </main>
      <footer className="flex w-full flex-col justify-center py-32">
        <h1 className="text-center text-xl">This web created with</h1>
        <InfiniteScroll />
      </footer>
    </>
  );
}
