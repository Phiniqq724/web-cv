import Link from "next/link";
import Section, { Points } from "./_components/section";
import Image from "next/image";
import InfiniteScroll from "./_components/carousel";
import {
  profileInfo,
  contactData,
  contactDataMobile,
  skillsData,
  awardsData,
  experienceData,
  educationData,
} from "src/data/profile-data";

// Profile Image Component
const ProfileImage = () => (
  <Link
    className="outline-primary relative mx-auto flex h-40 w-40 items-center justify-center rounded-full outline-4 outline-dashed hover:cursor-none sm:h-52 sm:w-52 md:h-64 md:w-64"
    href={profileInfo.profileLink}
  >
    <Image
      src={profileInfo.profileImageUrl}
      alt="Profile Picture"
      width={250}
      height={250}
      className="relative z-10 h-full w-full rounded-full object-cover"
    />
  </Link>
);

// Profile Header Component
const ProfileHeader = () => (
  <div className="flex flex-col gap-4">
    <h1 className="text-6xl uppercase">{profileInfo.name}</h1>
    <p className="text-4xl font-medium text-gray-500 uppercase">
      {profileInfo.title}
    </p>
  </div>
);

// Profile Description Component
const ProfileDescription = () => (
  <p>
    I am {profileInfo.description.name}. I am a student from{" "}
    {profileInfo.description.school} with{" "}
    <span className="font-medium">{profileInfo.description.experience}</span>{" "}
    experience in web and research technologies. I have learned many languages
    frameworks such as{" "}
    {profileInfo.description.technologies.map((tech, index) => (
      <span key={tech}>
        <span className="font-medium">{tech}</span>
        {index < profileInfo.description.technologies.length - 1 && ", "}
      </span>
    ))}{" "}
    and more!
  </p>
);

// Desktop Left Sections Configuration
const leftSections = [
  {
    title: undefined,
    content: <ProfileImage />,
  },
  {
    title: "Contact",
    content: <Points points={contactData} />,
  },
  {
    title: "Skills",
    content: <Points points={skillsData} />,
  },
  {
    title: "Awards",
    content: <Points points={awardsData} />,
  },
];

// Desktop Right Sections Configuration
const rightSections = [
  {
    title: <ProfileHeader />,
    content: <ProfileDescription />,
  },
  {
    title: "Experience",
    content: <Points points={experienceData} />,
  },
  {
    title: "Education",
    content: <Points points={educationData} />,
  },
];

// Mobile Left Sections Configuration
const leftSectionsMobile = [
  {
    title: undefined,
    content: <ProfileImage />,
  },
  {
    title: <ProfileHeader />,
    content: <ProfileDescription />,
  },
  {
    title: "Contact",
    content: <Points points={contactDataMobile} />,
  },
  {
    title: "Skills",
    content: <Points points={skillsData} />,
  },
];

// Mobile Right Sections Configuration
const rightSectionsMobile = [
  {
    title: "Experience",
    content: <Points points={experienceData} />,
  },
  {
    title: "Education",
    content: <Points points={educationData} />,
  },
  {
    title: "Awards",
    content: <Points points={awardsData} />,
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
