import "~/styles/globals.css";

import { type Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { SmoothFollower } from "./_components/cursor";

export const metadata: Metadata = {
  title: "Fahrell Sandy | CV",
  description: "CV",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body>
        <main>
          <SmoothFollower>{children}</SmoothFollower>
        </main>
      </body>
    </html>
  );
}
