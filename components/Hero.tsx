"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCricle from "./BackgroundCricle";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi,My name is Rakin",
      "Guy who loves coffee",
      "< ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 text-center">
      <BackgroundCricle />
      <Image
        className="relative mx-auto aspect-square rounded-full object-cover"
        alt="profile-photo"
        src="/profile2.jpeg"
        width={120}
        height={120}
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          Frontend Developer
        </h2>
        <h1 className="px-10 text-4xl font-semibold lg:text-5xl">
          <span className=" ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
