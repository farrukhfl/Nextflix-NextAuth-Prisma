import React, { ReactNode } from "react";
import Background_image from "../../public/login_background.jpg";
import Image from "next/image";
import Logo from "../../public/netflix_logo.svg";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-screen relative flex flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={Background_image}
        alt="background image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        fill
        priority
      />
      <Image
        src={Logo}
        alt="Logo"
        width={120}
        height={120}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        priority
      />
      {children}
    </div>
  );
}
